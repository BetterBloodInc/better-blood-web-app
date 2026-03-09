import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { BiomarkerRangeSourceId } from '~src/constants/biomarker-ranges'
import { useAppDispatch } from '~src/hooks'
import { BiomarkerId } from '~src/types/biomarker-types'

export interface EditBiomarkerReferenceRangeModalState {
  isVisible: boolean
  biomarkerId: BiomarkerId | undefined
  source: BiomarkerRangeSourceId | undefined
  min: number | undefined
  max: number | undefined
}

const initialState: EditBiomarkerReferenceRangeModalState = {
  isVisible: false,
  biomarkerId: undefined,
  source: undefined,
  min: undefined,
  max: undefined,
}

export const slice = createSlice({
  name: 'edit-biomarker-reference-range-modal',
  initialState,
  reducers: {
    toggleEditBiomarkerModal: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload
    },
    setBiomarkerId: (state, action: PayloadAction<BiomarkerId | undefined>) => {
      state.biomarkerId = action.payload
    },
    setSource: (
      state,
      action: PayloadAction<BiomarkerRangeSourceId | undefined>,
    ) => {
      state.source = action.payload
    },
    setMin: (state, action: PayloadAction<number | undefined>) => {
      state.min = action.payload
    },
    setMax: (state, action: PayloadAction<number | undefined>) => {
      state.max = action.payload
    },
  },
})

// Export actions
export const useToggleEditBiomarkerReferenceRangeModal = () => {
  const dispatch = useAppDispatch()
  return (
    isVisible: boolean,
    biomarkerId?: BiomarkerId,
    source?: BiomarkerRangeSourceId,
    min?: number,
    max?: number,
  ) => {
    dispatch(slice.actions.toggleEditBiomarkerModal(isVisible))
    dispatch(slice.actions.setBiomarkerId(biomarkerId))
    dispatch(slice.actions.setSource(source))
    dispatch(slice.actions.setMin(min))
    dispatch(slice.actions.setMax(max))
  }
}

// Export reducer
export const EditBiomarkerReferenceRangeModalReducer = slice.reducer
