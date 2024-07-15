import { useMutation, useQuery } from '@tanstack/react-query'
import { BiomarkerId } from '~src/types/biomarker-types'
import { Demographic, BiomarkerMeasurement } from '~src/types/user-types'
import { Profile } from '~src/db/profile-db'

export const setActiveProfileId = (id: number) => {
  if (localStorage) {
    localStorage.setItem('activeProfileId', `${id}`)
  }
}

export const useActiveProfileQuery = () =>
  useQuery({
    queryKey: ['useActiveProfileQuery'],
    queryFn: async (): Promise<Profile | null> => {
      try {
        if (localStorage) {
          const activeProfileId = localStorage.getItem('activeProfileId')
          if (activeProfileId) {
            const activeProfileIdNumber = parseInt(activeProfileId)
            let foundProfile = await Profile.fetchById(activeProfileIdNumber)
            if (!foundProfile) {
              const profiles = await Profile.fetchAll()
              if (profiles.length > 0) {
                localStorage.setItem(
                  'activeProfileId',
                  `${profiles[0].id ?? 1}`,
                )
                foundProfile = profiles[0]
              } else {
                const profile = new Profile('New Profile')
                await profile.save()
                localStorage.setItem('activeProfileId', `${profile.id ?? 1}`)
                return profile
              }
            }
            return foundProfile ?? null
          } else {
            const profile = new Profile('New Profile')
            await profile.save()
            localStorage.setItem('activeProfileId', `${profile.id ?? 1}`)
            return profile
          }
        }
      } catch (e) {
        console.error(e)
      }
      return null
    },
  })

export const useProfilesQuery = () =>
  useQuery({
    queryKey: ['useProfilesQuery'],
    queryFn: async (): Promise<Profile[]> => {
      try {
        return await Profile.fetchAll()
      } catch (e) {
        console.error(e)
      }
      return []
    },
  })

export const useSaveDemographicsMutation = () => {
  const { data: profile, refetch } = useActiveProfileQuery()
  return useMutation({
    mutationKey: ['useSaveDemographicsMutation'],
    mutationFn: async (demographic: Demographic) => {
      if (!profile) {
        return
      }
      profile.demographic = demographic
      await profile.save()
      refetch()
    },
  })
}

export const useAddBiomarkerMeasurementMutation = () => {
  const { data: profile, refetch } = useActiveProfileQuery()
  return useMutation({
    mutationKey: ['useAddBiomarkerMeasurementMutation'],
    mutationFn: async (metric: BiomarkerMeasurement) => {
      if (!profile) {
        return
      }
      if (!profile.biomarkers[metric.biomarkerId]) {
        profile.biomarkers[metric.biomarkerId] = []
      }
      profile.biomarkers[metric.biomarkerId].push(metric)
      profile.save()
      refetch()
    },
  })
}

export const useDeleteBiomarkerMeasurementMutation = () => {
  const { data: profile, refetch } = useActiveProfileQuery()
  return useMutation({
    mutationKey: ['useDeleteBiomarkerMeasurementMutation'],
    mutationFn: async ({
      biomarkerId,
      timestamp,
    }: {
      biomarkerId: BiomarkerId
      timestamp: number
    }) => {
      if (!profile) {
        return
      }
      if (!profile.biomarkers[biomarkerId]) {
        profile.biomarkers[biomarkerId] = []
      }
      profile.biomarkers[biomarkerId] = profile.biomarkers[biomarkerId].filter(
        (m) => m.timestamp !== timestamp,
      )
      await profile.save()
      refetch()
    },
  })
}
