import React, { useEffect, useState } from 'react'
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
import { Card } from '~src/library/Card'
import { Button } from '~src/library/Button'
import { Row } from '~src/library/Row'
import { Fader } from '~src/library/transition/Fader'
import {
  useActiveProfileQuery,
  useProfilesQuery,
  useSaveDemographicsMutation,
} from '~src/api/profiles-api'
import './Profile.scss'

export const Profile = () => {
  const { refetch: refetchProfiles } = useProfilesQuery()
  const { data: profile, isFetching } = useActiveProfileQuery()
  const { mutateAsync: saveDemographics } = useSaveDemographicsMutation()
  const [name, setName] = useState(profile?.name ?? 'New Profile')
  const [age, setAge] = useState(profile?.demographic?.age)
  const [gender, setGender] = useState(profile?.demographic?.gender)
  const [ethnicity, setEthnicity] = useState(profile?.demographic?.ethnicity)
  const [weight, setWeight] = useState(profile?.demographic?.weight)
  const [weightUnit, setWeightUnit] = useState(profile?.demographic?.weightUnit)
  const [height, setHeight] = useState(profile?.demographic?.height)
  const [heightUnit, setHeightUnit] = useState(profile?.demographic?.heightUnit)

  useEffect(() => {
    setName(profile?.name ?? 'New Profile')
    setAge(profile?.demographic?.age)
    setGender(profile?.demographic?.gender)
    setEthnicity(profile?.demographic?.ethnicity)
    setWeight(profile?.demographic?.weight)
    setWeightUnit(profile?.demographic?.weightUnit)
    setHeight(profile?.demographic?.height)
    setHeightUnit(profile?.demographic?.heightUnit)
  }, [profile])

  const onSave = async () => {
    if (!profile) {
      return
    }
    profile.name = name
    await profile.save()
    await saveDemographics({
      age,
      gender,
      ethnicity,
      weight,
      weightUnit,
      height,
      heightUnit,
    })
    await refetchProfiles()
    toast('Saved!')
  }

  const onDelete = async () => {
    if (!profile) {
      return
    }
    await profile.delete()
    await refetchProfiles()
    toast('Deleted!')
    window.location.reload()
  }
  return (
    <Fader isVisible>
      <Col>
        <h1>Profile</h1>
        <p>
          Add your profile information to get tailored advice about your
          biometrics. This data is only saved to your browser.
        </p>
        {!isFetching && (
          <Col style={{ gap: '1rem', alignItems: 'flex-start' }}>
            <Input
              label="Name"
              type="text"
              value={name}
              onChangeValue={(value) => {
                setName(value as string)
              }}
            />
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
            <Row gap="1rem" className="Weight">
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
            <Row gap="1rem" className="Height">
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
            <Row justify="between" gap="1rem" fullWidth>
              <Button text="Save changes" onClick={onSave} />
              <Button text="Delete profile" onClick={onDelete} />
            </Row>
          </Col>
        )}
      </Col>
    </Fader>
  )
}
export default Profile
