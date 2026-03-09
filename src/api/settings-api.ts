import { useQuery, useQueryClient } from '@tanstack/react-query'
import { BiomarkerCategory, BiomarkerId } from '~src/types/biomarker-types'

export const useSelectedLLMQuery = () =>
  useQuery({
    queryKey: ['useSelectedLLMQuery'],
    queryFn: () => {
      try {
        if (localStorage) {
          return localStorage.getItem('user.selectedLLM') as 'openai' | 'gemini'
        }
      } catch (e) {
        console.error(e)
      }
    },
  })

export const saveSelectedLLM = (value: 'openai' | 'gemini') => {
  try {
    if (localStorage) {
      localStorage.setItem('user.selectedLLM', value)
    }
  } catch (e) {
    console.error(e)
  }
}

export const useOpenAIApiKeyQuery = () =>
  useQuery({
    queryKey: ['useOpenAIApiKey'],
    queryFn: () => {
      try {
        if (localStorage) {
          return localStorage.getItem('user.openai.apiKey')
        }
      } catch (e) {
        console.error(e)
      }
    },
  })

export const saveOpenAIApiKey = (apiKey: string) => {
  try {
    if (localStorage) {
      localStorage.setItem('user.openai.apiKey', apiKey)
    }
  } catch (e) {
    console.error(e)
  }
}

export const useSelectedCategoriesQuery = () =>
  useQuery({
    queryKey: ['useSelectedCategoriesQuery'],
    queryFn: (): BiomarkerCategory[] => {
      try {
        if (localStorage) {
          return JSON.parse(
            localStorage.getItem('user.settings.selectedCategories') ?? '[]',
          ) as BiomarkerCategory[]
        }
      } catch (e) {
        console.error(e)
      }
      return []
    },
  })

export const saveSelectedCategories = (categories: BiomarkerCategory[]) => {
  try {
    if (localStorage) {
      localStorage.setItem(
        'user.settings.selectedCategories',
        JSON.stringify(categories),
      )
    }
  } catch (e) {
    console.error(e)
  }
}

const PINNED_BIOMARKERS_KEY = 'user.settings.pinnedBiomarkerIds'

export const usePinnedBiomarkerIdsQuery = () =>
  useQuery({
    queryKey: ['usePinnedBiomarkerIdsQuery'],
    queryFn: (): BiomarkerId[] => {
      try {
        if (localStorage) {
          return (JSON.parse(
            localStorage.getItem(PINNED_BIOMARKERS_KEY) ?? '[]',
          ) as BiomarkerId[])
        }
      } catch (e) {
        console.error(e)
      }
      return []
    },
  })

export const savePinnedBiomarkerIds = (ids: BiomarkerId[]) => {
  try {
    if (localStorage) {
      localStorage.setItem(PINNED_BIOMARKERS_KEY, JSON.stringify(ids))
    }
  } catch (e) {
    console.error(e)
  }
}

export const useTogglePinnedBiomarker = () => {
  const queryClient = useQueryClient()
  const { data: pinned = [] } = usePinnedBiomarkerIdsQuery()
  return (id: BiomarkerId) => {
    const next = pinned.includes(id)
      ? pinned.filter((x) => x !== id)
      : [...pinned, id]
    savePinnedBiomarkerIds(next)
    queryClient.setQueryData(['usePinnedBiomarkerIdsQuery'], next)
  }
}

export type BiomarkersView = 'table' | 'list'
const BIOMARKERS_VIEW_KEY = 'user.settings.biomarkersView'

export const useBiomarkersViewQuery = () =>
  useQuery({
    queryKey: ['useBiomarkersViewQuery'],
    queryFn: (): BiomarkersView => {
      try {
        if (localStorage) {
          const v = localStorage.getItem(BIOMARKERS_VIEW_KEY)
          return v === 'list' ? 'list' : 'table'
        }
      } catch (e) {
        console.error(e)
      }
      return 'table' as BiomarkersView
    },
  })

export const saveBiomarkersView = (view: BiomarkersView) => {
  try {
    if (localStorage) {
      localStorage.setItem(BIOMARKERS_VIEW_KEY, view)
    }
  } catch (e) {
    console.error(e)
  }
}

export const useSetBiomarkersView = () => {
  const queryClient = useQueryClient()
  return (view: BiomarkersView) => {
    saveBiomarkersView(view)
    queryClient.setQueryData(['useBiomarkersViewQuery'], view)
  }
}

export type DisplayDensity = 'comfortable' | 'compact'
const DENSITY_KEY = 'user.settings.displayDensity'

export const useDisplayDensityQuery = () =>
  useQuery({
    queryKey: ['useDisplayDensityQuery'],
    queryFn: (): DisplayDensity => {
      try {
        if (localStorage) {
          const v = localStorage.getItem(DENSITY_KEY)
          return v === 'compact' ? 'compact' : 'comfortable'
        }
      } catch (e) {
        console.error(e)
      }
      return 'comfortable'
    },
  })

export const saveDisplayDensity = (density: DisplayDensity) => {
  try {
    if (localStorage) {
      localStorage.setItem(DENSITY_KEY, density)
    }
  } catch (e) {
    console.error(e)
  }
}

export const useSetDisplayDensity = () => {
  const queryClient = useQueryClient()
  return (density: DisplayDensity) => {
    saveDisplayDensity(density)
    queryClient.setQueryData(['useDisplayDensityQuery'], density)
  }
}

const CHANGELOG_LAST_SEEN_KEY = 'user.changelog.lastSeenVersion'

export function getChangelogLastSeen(): string | null {
  try {
    if (localStorage) {
      return localStorage.getItem(CHANGELOG_LAST_SEEN_KEY)
    }
  } catch (e) {
    console.error(e)
  }
  return null
}

export const useChangelogLastSeenQuery = () =>
  useQuery({
    queryKey: ['useChangelogLastSeenQuery'],
    queryFn: getChangelogLastSeen,
  })

export function saveChangelogLastSeen(version: string) {
  try {
    if (localStorage) {
      localStorage.setItem(CHANGELOG_LAST_SEEN_KEY, version)
    }
  } catch (e) {
    console.error(e)
  }
}
