import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { useAppDispatch } from '~src/hooks'
import { BiomarkerId } from '~src/types/biomarker-types'

export interface AddBloodMetricsModalState {
  isVisible: boolean
  biomarkerId: BiomarkerId | undefined
}

const initialState: AddBloodMetricsModalState = {
  isVisible: false,
  biomarkerId: undefined,
}

export const slice = createSlice({
  name: 'add-blood-metrics-modal',
  initialState,
  reducers: {
    toggleAddBloodMetricsModal: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload
    },
    setMetricId: (state, action: PayloadAction<BiomarkerId | undefined>) => {
      state.biomarkerId = action.payload
    },
  },
})

// Export actions
export const useToggleAddBloodMetricsModal = () => {
  const dispatch = useAppDispatch()
  return (isVisible: boolean, biomarkerId?: BiomarkerId) => {
    dispatch(slice.actions.toggleAddBloodMetricsModal(isVisible))
    dispatch(slice.actions.setMetricId(biomarkerId))
  }
}

// Export reducer
export const AddBloodMetricsReducer = slice.reducer
