import React, { useEffect, useState } from 'react'
import { Button } from '~src/library/Button'
import { Col } from '~src/library/Col'
import { Modal } from '~src/library/Modal'
import { Row } from '~src/library/Row'
import {
  useActiveProfileQuery,
  useAddBiomarkerReferenceRangeMutation,
  useDeleteBiomarkerReferenceRangeMutation,
} from '~src/api/profiles-api'
import { useToggleEditBiomarkerReferenceRangeModal } from './slice'
import { useAppSelector } from '~src/hooks'
import toast, { Toaster } from 'react-hot-toast'
import { Input } from '~src/library/form/Input'

export function EditBiomarkerReferenceRangeModal() {
  const toggleEditBiomarkerReferenceRangeModal =
    useToggleEditBiomarkerReferenceRangeModal()
  const { isVisible, biomarkerId, source, min, max } = useAppSelector(
    (state) => state.editBiomarkerReferenceRangeModal,
  )
  const { data: profile } = useActiveProfileQuery()

  const [minState, setMinState] = useState<number | undefined>(min)
  const [maxState, setMaxState] = useState<number | undefined>(max)
  useEffect(() => {
    setMinState(min)
    setMaxState(max)
  }, [biomarkerId, source, min, max])

  const customReferenceRange =
    biomarkerId && profile?.referenceRanges?.[biomarkerId]

  useEffect(() => {
    if (biomarkerId && customReferenceRange) {
      setMinState(customReferenceRange.min)
      setMaxState(customReferenceRange.max)
    }
  }, [profile, biomarkerId])

  const onClose = () => {
    toggleEditBiomarkerReferenceRangeModal(false)
    setMinState(min)
    setMaxState(max)
  }
  const { mutate: deleteRange } = useDeleteBiomarkerReferenceRangeMutation()
  const { mutate: addRange } = useAddBiomarkerReferenceRangeMutation()
  const onSave = () => {
    if (!biomarkerId) {
      toast.error('No biomarker to save')
      return
    }
    if (!minState || !maxState) {
      toast.error('Please fill all fields')
      return
    }
    try {
      addRange({
        id: biomarkerId,
        source: source!,
        min: minState!,
        max: maxState!,
      })
      toast.success('Reference range saved')
    } catch (e) {
      toast.error('An error occurred')
    }
    onClose()
  }
  const onDelete = () => {
    if (!biomarkerId) {
      toast.error('No biomarker to delete')
      return
    }
    deleteRange(biomarkerId)
    onClose()
  }
  return (
    <Modal isVisible={isVisible} onClose={onClose} style={{ width: 400 }}>
      <Col gap="1rem">
        <Row>
          <h2>Edit {biomarkerId} reference range</h2>
        </Row>
        <Col style={{ gap: '1rem', overflowY: 'auto', maxHeight: '60vh' }}>
          <Input
            label="Min"
            type="number"
            value={minState?.toString()}
            onChangeValue={(e) => {
              try {
                setMinState(Number(e))
              } catch (e) {
                toast.error('Invalid number')
              }
            }}
          />
          <Input
            label="Max"
            type="number"
            value={maxState?.toString()}
            onChangeValue={(e) => {
              try {
                setMaxState(Number(e))
              } catch (e) {
                toast.error('Invalid number')
              }
            }}
          />
        </Col>
        <Row
          style={{
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            gap: '1rem',
          }}
        >
          {customReferenceRange && <Button text="Delete" onClick={onDelete} />}
          <Button text="Save" onClick={onSave} />
        </Row>
      </Col>
      <Toaster />
    </Modal>
  )
}
