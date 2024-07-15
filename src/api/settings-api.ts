import { useQuery } from '@tanstack/react-query'
import { BiomarkerCategory } from '~src/types/biomarker-types'

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
    queryFn: () => {
      try {
        if (localStorage) {
          return JSON.parse(
            localStorage.getItem('user.settings.selectedCategories') ?? '[]',
          ) as BiomarkerCategory[]
        }
      } catch (e) {
        console.error(e)
      }
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
