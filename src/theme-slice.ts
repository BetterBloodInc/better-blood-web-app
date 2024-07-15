import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from '~src/hooks'

export interface ThemeState {
  darkMode: boolean
}

const getInitialState = (): ThemeState => {
  if (window.localStorage) {
    const darkMode = window.localStorage.getItem('darkMode')
    if (darkMode === 'false') {
      return {
        darkMode: false,
      }
    }
  }
  return {
    darkMode: true,
  }
}

export const slice = createSlice({
  name: 'theme',
  initialState: getInitialState(),
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode
      if (window.localStorage) {
        window.localStorage.setItem('darkMode', state.darkMode.toString())
      }
    },
  },
})

// Export actions
export const useToggleTheme = () => {
  const dispatch = useAppDispatch()
  return () => {
    dispatch(slice.actions.toggleDarkMode())
  }
}

// Export reducer
export const ThemeReducer = slice.reducer

// Export selectors
export function useDarkModeSelector() {
  return useAppSelector((state) => state.theme.darkMode)
}
