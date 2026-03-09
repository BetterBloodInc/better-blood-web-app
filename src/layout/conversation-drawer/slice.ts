import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { useAppDispatch } from '~src/hooks'

export interface ConversationDrawerState {
  isVisible: boolean
}

const initialState: ConversationDrawerState = {
  isVisible: false,
}

export const slice = createSlice({
  name: 'conversation-drawer',
  initialState,
  reducers: {
    toggleConversationDrawer: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload
    },
  },
})

// Export actions
export const useToggleConversationDrawer = () => {
  const dispatch = useAppDispatch()
  return (isVisible: boolean) => {
    dispatch(slice.actions.toggleConversationDrawer(isVisible))
  }
}

// Export reducer
export const ConversationDrawerReducer = slice.reducer
