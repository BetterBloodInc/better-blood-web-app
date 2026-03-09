import { createSlice } from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from '~src/hooks'

export interface WhatsNewState {
  isOpen: boolean
}

const initialState: WhatsNewState = {
  isOpen: false,
}

export const slice = createSlice({
  name: 'whats-new',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    toggle: (state) => {
      state.isOpen = !state.isOpen
    },
  },
})

export const useWhatsNewOpen = () => {
  const dispatch = useAppDispatch()
  return () => dispatch(slice.actions.open())
}

export const useWhatsNewClose = () => {
  const dispatch = useAppDispatch()
  return () => dispatch(slice.actions.close())
}

export const useWhatsNewToggle = () => {
  const dispatch = useAppDispatch()
  return () => dispatch(slice.actions.toggle())
}

export const useWhatsNewIsOpen = () =>
  useAppSelector((state) => state.whatsNew?.isOpen ?? false)

export const WhatsNewReducer = slice.reducer
