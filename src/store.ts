import { configureStore } from '@reduxjs/toolkit'
import { AddBloodMetricsReducer } from './modals/add-blood-metrics-modal/slice'
import { ThemeReducer } from './theme-slice'
import { MenuReducer } from './layout/menu-slice'
import { ConversationDrawerReducer } from './layout/conversation-drawer/slice'
import { UploadFileReducer } from './modals/upload-file-modal/slice'
import { EditBiomarkerModalReducer } from './modals/edit-biomarker-modal/slice'
import { EditBiomarkerReferenceRangeModalReducer } from './modals/edit-biomarker-reference-range-modal/slice'

export const store = configureStore({
  reducer: {
    theme: ThemeReducer,
    menu: MenuReducer,
    conversationDrawer: ConversationDrawerReducer,
    addBloodMetricsModal: AddBloodMetricsReducer,
    editBiomarkerModal: EditBiomarkerModalReducer,
    editBiomarkerReferenceRangeModal: EditBiomarkerReferenceRangeModalReducer,
    uploadFileModal: UploadFileReducer,
  },
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
