import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { Col } from '~src/library/Col'
import { Input } from '~src/library/form/Input'
import { PillSelect } from '~src/library/form/PillSelect'
import {
  Ethnicity,
  Gender,
  HeightUnit,
  WeightUnit,
} from '~src/types/biomarker-types'
import { Button } from '~src/library/Button'
import { Row } from '~src/library/Row'
import {
  useActiveProfileQuery,
  useProfilesQuery,
  useSaveProfileMutation,
} from '~src/api/profiles-api'
import { PageContainer } from '~src/library/PageContainer'
import { PageHeader } from '~src/library/PageHeader'
import { Modal } from '~src/library/Modal'
import { Skeleton } from '~src/library/transition/Skeleton'
import './Profile.scss'

const AUTO_SAVE_DEBOUNCE_MS = 600

export const Profile = () => {
  const navigate = useNavigate()
  const { refetch: refetchProfiles } = useProfilesQuery()
  const { data: profile, isFetching } = useActiveProfileQuery()
  const { mutateAsync: saveProfile } = useSaveProfileMutation()
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [name, setName] = useState(profile?.name ?? 'New Profile')
  const [age, setAge] = useState(profile?.demographic?.age)
  const [gender, setGender] = useState(profile?.demographic?.gender)
  const [ethnicity, setEthnicity] = useState(profile?.demographic?.ethnicity)
  const [weight, setWeight] = useState(profile?.demographic?.weight)
  const [weightUnit, setWeightUnit] = useState(profile?.demographic?.weightUnit)
  const [height, setHeight] = useState(profile?.demographic?.height)
  const [heightUnit, setHeightUnit] = useState(profile?.demographic?.heightUnit)
  const autoSaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isInitialSyncRef = useRef(true)

  useEffect(() => {
    setName(profile?.name ?? 'New Profile')
    setAge(profile?.demographic?.age)
    setGender(profile?.demographic?.gender)
    setEthnicity(profile?.demographic?.ethnicity)
    setWeight(profile?.demographic?.weight)
    setWeightUnit(profile?.demographic?.weightUnit)
    setHeight(profile?.demographic?.height)
    setHeightUnit(profile?.demographic?.heightUnit)
    isInitialSyncRef.current = true
  }, [profile])

  useEffect(() => {
    if (!profile || isInitialSyncRef.current) {
      isInitialSyncRef.current = false
      return
    }
    const demographic = profile.demographic ?? {}
    const same =
      profile.name === name &&
      demographic.age === age &&
      demographic.gender === gender &&
      demographic.ethnicity === ethnicity &&
      demographic.weight === weight &&
      demographic.weightUnit === weightUnit &&
      demographic.height === height &&
      demographic.heightUnit === heightUnit
    if (same) return

    if (autoSaveTimerRef.current) {
      clearTimeout(autoSaveTimerRef.current)
    }
    autoSaveTimerRef.current = setTimeout(async () => {
      autoSaveTimerRef.current = null
      try {
        await saveProfile({
          name,
          demographic: {
            age,
            gender,
            ethnicity,
            weight,
            weightUnit,
            height,
            heightUnit,
          },
        })
        await refetchProfiles()
        toast.success('Saved')
      } catch {
        toast.error('Failed to save')
      }
    }, AUTO_SAVE_DEBOUNCE_MS)

    return () => {
      if (autoSaveTimerRef.current) {
        clearTimeout(autoSaveTimerRef.current)
      }
    }
  }, [
    profile,
    name,
    age,
    gender,
    ethnicity,
    weight,
    weightUnit,
    height,
    heightUnit,
    saveProfile,
    refetchProfiles,
  ])

  const onDeleteClick = () => {
    setDeleteModalOpen(true)
  }

  const onDeleteConfirm = async () => {
    if (!profile) {
      return
    }
    setDeleteModalOpen(false)
    await profile.delete()
    await refetchProfiles()
    toast.success('Profile deleted')
    navigate('/')
  }

  // Only show skeleton on initial load when we have no profile yet.
  // Don't show it when refetching after save, or the form would unmount and scroll would jump to top.
  if (isFetching && !profile) {
    return (
      <PageContainer size="narrow">
        <PageHeader
          title="Profile"
          description="Add your profile information to get tailored advice about your biometrics. This data is only saved to your browser."
        />
        <div className="Profile-skeleton">
          <Skeleton width="100%" height={48} radius={4} />
          <Skeleton width="100%" height={48} radius={4} />
          <Skeleton width="100%" height={56} radius={4} />
          <Skeleton width="100%" height={56} radius={4} />
          <Skeleton width="100%" height={48} radius={4} />
          <Skeleton width="100%" height={48} radius={4} />
        </div>
      </PageContainer>
    )
  }

  return (
    <PageContainer size="narrow">
      <PageHeader
        title="Profile"
        description="Add your profile information to get tailored advice about your biometrics. This data is only saved to your browser."
      />
      <section className="Profile-section">
        <h2 className="Profile-sectionTitle">Identity</h2>
        <Col gap="1rem" align="start" className="Profile-sectionContent">
          <Input
            label="Name"
            type="text"
            value={name}
            onChangeValue={(value) => {
              setName(value as string)
            }}
          />
        </Col>
      </section>
      <section className="Profile-section">
        <h2 className="Profile-sectionTitle">Demographics</h2>
        <Col gap="1rem" align="start" className="Profile-sectionContent">
          <Input
            label="Age"
            type="number"
            value={age?.toString() ?? '0'}
            onChangeValue={(value) => {
              setAge((value as number) ?? 0)
            }}
          />
          <PillSelect<Gender>
            label="Birth Sex"
            options={Object.values(Gender).map((g) => ({
              label: g,
              value: g,
            }))}
            value={gender ? [gender] : []}
            onChange={(v) => {
              setGender(v[0])
            }}
          />
          <PillSelect
            label="Ethnicity"
            options={Object.values(Ethnicity).map((g) => ({
              label: g,
              value: g,
            }))}
            value={ethnicity ? [ethnicity] : []}
            onChange={(v) => {
              setEthnicity(v[0])
            }}
          />
        </Col>
      </section>
      <section className="Profile-section">
        <h2 className="Profile-sectionTitle">Body Metrics</h2>
        <Col gap="1rem" align="start" className="Profile-sectionContent">
          <Row gap="1rem" className="Profile-weightRow">
            <Input
              label="Weight"
              type="number"
              value={weight?.toString() ?? '0'}
              onChangeValue={(value) => {
                setWeight((value as number) ?? 0)
              }}
            />
            <PillSelect
              label="Weight Unit"
              options={Object.values(WeightUnit).map((g) => ({
                label: g,
                value: g,
              }))}
              value={weightUnit ? [weightUnit] : []}
              onChange={(v) => {
                setWeightUnit(v[0])
              }}
            />
          </Row>
          <Row gap="1rem" className="Profile-heightRow">
            <Input
              label="Height"
              type="number"
              value={height?.toString() ?? '0'}
              onChangeValue={(value) => {
                setHeight((value as number) ?? '0')
              }}
            />
            <PillSelect
              label="Height Unit"
              options={Object.values(HeightUnit).map((g) => ({
                label: g,
                value: g,
              }))}
              value={heightUnit ? [heightUnit] : []}
              onChange={(v) => {
                setHeightUnit(v[0])
              }}
            />
          </Row>
        </Col>
      </section>
      <section className="Profile-section Profile-dangerZone">
        <h2 className="Profile-sectionTitle">Danger Zone</h2>
        <Col gap="1rem" align="start" className="Profile-sectionContent">
          <p className="Profile-dangerDescription">
            Deleting your profile will permanently remove all associated
            biomarker data. This cannot be undone.
          </p>
          <Button
            text="Delete profile"
            variant="danger"
            onClick={onDeleteClick}
          />
        </Col>
      </section>
      <Modal
        isVisible={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        contentLabel="Delete profile confirmation"
      >
        <div className="Profile-deleteModal">
          <h3 className="Profile-deleteModalTitle">Delete profile?</h3>
          <p className="Profile-deleteModalMessage">
            Are you sure you want to delete this profile? All associated
            biomarker data will be removed. This cannot be undone.
          </p>
          <Row gap="1rem" justify="end" className="Profile-deleteModalActions">
            <Button text="Cancel" onClick={() => setDeleteModalOpen(false)} />
            <Button
              text="Delete profile"
              variant="danger"
              onClick={onDeleteConfirm}
            />
          </Row>
        </div>
      </Modal>
    </PageContainer>
  )
}
export default Profile
