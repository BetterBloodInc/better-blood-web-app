import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { useAppDispatch } from '~src/hooks'

export interface UploadFileModalState {
  isVisible: boolean
}

const initialState: UploadFileModalState = {
  isVisible: false,
}

export const slice = createSlice({
  name: 'upload-file-modal',
  initialState,
  reducers: {
    toggleUploadFileModal: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload
    },
  },
})

// Export actions
export const useToggleUploadFileModal = () => {
  const dispatch = useAppDispatch()
  return (isVisible: boolean) => {
    dispatch(slice.actions.toggleUploadFileModal(isVisible))
  }
}

// Export reducer
export const UploadFileReducer = slice.reducer
