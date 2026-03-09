import { createSlice } from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from '~src/hooks'

export interface MenuState {
  isOpenOnMobile: boolean
  isCollapsedOnDesktop: boolean
  isMoreDrawerOpen: boolean
}

const getIsCollapsedOnDesktopInitialState = () => {
  if (window.localStorage) {
    const isCollapsedOnDesktop = window.localStorage.getItem(
      'isCollapsedOnDesktop',
    )
    if (isCollapsedOnDesktop) {
      return isCollapsedOnDesktop === 'true'
    }
  }
  return false
}

export const slice = createSlice({
  name: 'menu',
  initialState: {
    isOpenOnMobile: false,
    isCollapsedOnDesktop: getIsCollapsedOnDesktopInitialState(),
    isMoreDrawerOpen: false,
  },
  reducers: {
    toggleIsOpenOnMobile: (state) => {
      state.isOpenOnMobile = !state.isOpenOnMobile
      if (window.localStorage) {
        window.localStorage.setItem(
          'isOpenOnMobile',
          state.isOpenOnMobile.toString(),
        )
      }
    },
    setMoreDrawerOpen: (state, action: { payload: boolean }) => {
      state.isMoreDrawerOpen = action.payload
    },
    toggleIsCollapsedOnDesktop: (state) => {
      state.isCollapsedOnDesktop = !state.isCollapsedOnDesktop
      if (window.localStorage) {
        window.localStorage.setItem(
          'isCollapsedOnDesktop',
          state.isCollapsedOnDesktop.toString(),
        )
      }
    },
  },
})

// Export actions
export const useToggleMenuOpenOnMobile = () => {
  const dispatch = useAppDispatch()
  return () => {
    dispatch(slice.actions.toggleIsOpenOnMobile())
  }
}

export const useToggleMenuCollapsedOnDesktop = () => {
  const dispatch = useAppDispatch()
  return () => {
    dispatch(slice.actions.toggleIsCollapsedOnDesktop())
  }
}

export const useSetMoreDrawerOpen = () => {
  const dispatch = useAppDispatch()
  return (open: boolean) => dispatch(slice.actions.setMoreDrawerOpen(open))
}

// Export reducer
export const MenuReducer = slice.reducer

// Export selectors
export function useMenuOpenOnMobileSelector() {
  return useAppSelector((state) => state.menu.isOpenOnMobile)
}

export function useMenuCollapsedOnDesktopSelector() {
  return useAppSelector((state) => state.menu.isCollapsedOnDesktop)
}

export function useMoreDrawerOpenSelector() {
  return useAppSelector((state) => state.menu.isMoreDrawerOpen)
}
