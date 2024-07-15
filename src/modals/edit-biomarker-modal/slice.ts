import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { useAppDispatch } from '~src/hooks'
import { BiomarkerId } from '~src/types/biomarker-types'

export interface EditBiomarkerModalState {
  isVisible: boolean
  biomarkerId: BiomarkerId | undefined
  timestamp: number | undefined
  value: any
}

const initialState: EditBiomarkerModalState = {
  isVisible: false,
  biomarkerId: undefined,
  timestamp: undefined,
  value: undefined,
}

export const slice = createSlice({
  name: 'edit-blood-metrics-modal',
  initialState,
  reducers: {
    toggleEditBiomarkerModal: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload
    },
    setMetricId: (state, action: PayloadAction<BiomarkerId | undefined>) => {
      state.biomarkerId = action.payload
    },
    setTimestamp: (state, action: PayloadAction<number | undefined>) => {
      state.timestamp = action.payload
    },
    setValue: (state, action: PayloadAction<any | undefined>) => {
      state.value = action.payload
    },
  },
})

// Export actions
export const useToggleEditBiomarkerModal = () => {
  const dispatch = useAppDispatch()
  return (
    isVisible: boolean,
    biomarkerId?: BiomarkerId,
    timestamp?: number,
    value?: any,
  ) => {
    dispatch(slice.actions.toggleEditBiomarkerModal(isVisible))
    dispatch(slice.actions.setMetricId(biomarkerId))
    dispatch(slice.actions.setTimestamp(timestamp))
    dispatch(slice.actions.setValue(value))
  }
}

// Export reducer
export const EditBiomarkerModalReducer = slice.reducer
