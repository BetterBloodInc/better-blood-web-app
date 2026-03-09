import { faPlus, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Select, { GroupBase, OptionsOrGroups } from 'react-select'
import { Tooltip } from 'react-tooltip'
import {
  setActiveProfileId,
  useActiveProfileQuery,
  useProfilesQuery,
} from '~src/api/profiles-api'
import { Profile } from '~src/db/profile-db'
import { useResponsive } from '~src/hooks/useResponsive'
import { Row } from '~src/library/Row'
import { useDarkModeSelector } from '~src/theme-slice'

export function ProfileSelector({ isCollapsed }: { isCollapsed: boolean }) {
  const isDarkMode = useDarkModeSelector()
  const navigate = useNavigate()
  const [target, setTarget] = useState<HTMLElement | null>(null)
  const { data: profiles, refetch: refetchProfiles } = useProfilesQuery()
  const { data: activeProfile, refetch: refetchActiveProfile } =
    useActiveProfileQuery()
  useEffect(() => {
    setTarget(document.body)
  }, [])
  const onChange = async (value: any) => {
    if (value.value === -1) {
      const profile = new Profile('New Profile')
      const addedProfile = await profile.add()
      await refetchProfiles()
      setActiveProfileId(addedProfile)
      navigate('/profile')
    } else {
      setActiveProfileId(value.value)
    }
    await refetchActiveProfile()
  }
  const options: OptionsOrGroups<any, GroupBase<any>> = [
    ...(profiles?.map((profile) => ({
      label: profile.name,
      value: profile.id,
    })) ?? []),
    {
      label: '',
      options: [{ label: 'Add Profile', value: -1 }],
    },
  ]
  return (
    <>
      {isCollapsed && <Tooltip anchorSelect=".profile-selector" />}
      <div
        className="profile-selector"
        data-tooltip-content={isCollapsed ? activeProfile?.name : undefined}
        data-tooltip-place="right"
        style={{
          margin: isCollapsed ? '0 10px' : '0 8px',
        }}
      >
        <Select
          menuPortalTarget={target}
          name="profile-selector"
          id="profile-selector"
          onChange={onChange}
          options={options}
          isSearchable={false}
          formatOptionLabel={(option) => {
            if (option.value === -1) {
              return (
                <Row gap={8} align="center">
                  <FontAwesomeIcon icon={faPlus} />
                  <span style={{ fontWeight: 500 }}>Add new profile</span>
                </Row>
              )
            } else {
              return (
                <Row gap={10} align="center">
                  <FontAwesomeIcon icon={faUserCircle} opacity={0.5} />
                  {option.label}
                </Row>
              )
            }
          }}
          isClearable={false}
          value={options.find((option) => option.value === activeProfile?.id)}
          styles={{
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
            control: (provided) => ({
              ...provided,
              backgroundColor: isDarkMode
                ? 'rgba(255,255,255,0.075)'
                : undefined,
              border: 0,
              boxShadow: isDarkMode
                ? undefined
                : 'inset 0 0 0 1px rgba(0,0,0,0.1)',
              borderRadius: 4,
              transition: '0.3s',
              ':hover': {
                borderColor: 'none',
                backgroundColor: isDarkMode
                  ? 'rgba(255,255,255,0.1)'
                  : 'rgba(0,0,0,0.1)',
              },
              ':focus-within': {
                borderColor: 'none',
                boxShadow: `inset 0 0 0 2px #F5567E`,
                backgroundColor: '#F5567E22',
              },
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              display: isCollapsed ? 'none' : 'block',
            }),
            input: (provided) => ({
              ...provided,
              padding: '6px 6px 6px 0px',
              color: 'white',
              boxShadow: 'none',
              ':focus': {
                borderColor: 'none',
                boxShadow: 'none',
              },
            }),
            indicatorSeparator: (provided) => ({
              ...provided,
              backgroundColor: isDarkMode
                ? 'rgba(255,255,255,0.1)'
                : 'rgba(0,0,0,0.1)',
              display: isCollapsed ? 'none' : 'block',
            }),
            singleValue: (provided) => ({
              ...provided,
              color: isDarkMode ? 'white' : 'black',
              padding: isCollapsed ? '10px 6px 10px 2px' : '10px 8px 10px 4px',
            }),
            menu: (provided) => ({
              ...provided,
              backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : '#fff',
              boxShadow: isDarkMode
                ? `0 0 0 1px rgba(255,255,255,0.2)`
                : `0 0 0 1px rgba(0,0,0,0.2)`,
              overflow: 'hidden',
              backdropFilter: 'blur(20px)',
              width: isCollapsed ? 200 : undefined,
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isFocused
                ? isDarkMode
                  ? '#F5567EDD'
                  : '#F5567E22'
                : isDarkMode
                  ? '#rgba(0,0,0,0.5)'
                  : '#fff',
              color: state.isFocused
                ? isDarkMode
                  ? '#FFF'
                  : '#F5567E'
                : isDarkMode
                  ? '#FFFA'
                  : '#000A',
              fontWeight: state.isFocused ? 500 : 400,
              fontFamily: 'Poppins, sans-serif',
              padding: '12px 14px',
              cursor: 'pointer',
              '&:last-child': {
                padding: '12px 8px',
                margin: '0 8px',
                width: 'calc(100% - 16px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 4,
              },
            }),
          }}
        />
      </div>
    </>
  )
}
