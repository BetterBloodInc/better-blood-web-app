import { createSlice } from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from '~src/hooks'

export interface CommandPaletteState {
  isOpen: boolean
}

const initialState: CommandPaletteState = {
  isOpen: false,
}

export const slice = createSlice({
  name: 'command-palette',
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

export const useCommandPaletteOpen = () => {
  const dispatch = useAppDispatch()
  return () => dispatch(slice.actions.open())
}

export const useCommandPaletteClose = () => {
  const dispatch = useAppDispatch()
  return () => dispatch(slice.actions.close())
}

export const useCommandPaletteToggle = () => {
  const dispatch = useAppDispatch()
  return () => dispatch(slice.actions.toggle())
}

export const useCommandPaletteIsOpen = () =>
  useAppSelector((state) => state.commandPalette?.isOpen ?? false)

export const CommandPaletteReducer = slice.reducer
