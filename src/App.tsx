import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { Tooltip } from 'react-tooltip'
import { RouterProvider } from 'react-router-dom'
import ReactModal from 'react-modal'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { router } from './router'
import { useDarkModeSelector } from './theme-slice'
import { ConversationDrawer } from './layout/conversation-drawer/ConversationDrawer'
import { useAppSelector } from './hooks'
import { AddBloodMetricsModal } from './modals/add-blood-metrics-modal/AddBloodMetricsModal'
import { UploadFileModal } from './modals/upload-file-modal/UploadFileModal'
import { WhatsNewModal } from './whats-new/WhatsNewModal'
import { useDisplayDensityQuery } from '~src/api/settings-api'
import './reset.css'
import './App.scss'

const queryClient = new QueryClient()

function AppRoot() {
  const darkMode = useDarkModeSelector()
  const { data: density = 'comfortable' } = useDisplayDensityQuery()
  const { isVisible: isConversationDrawerVisible } = useAppSelector(
    (state) => state.conversationDrawer,
  )
  useEffect(() => {
    const app = document.getElementById('App') as HTMLElement
    ReactModal.setAppElement(app)
  }, [])
  return (
    <div
      id="App"
      className={`App ${darkMode ? 'dark-mode' : ''} ${density === 'compact' ? 'density-compact' : ''}`}
    >
      <RouterProvider router={router} />
      {isConversationDrawerVisible && <ConversationDrawer />}
      <AddBloodMetricsModal />
      <UploadFileModal />
      <WhatsNewModal />
      <Toaster />
      <Tooltip />
    </div>
  )
}

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoot />
    </QueryClientProvider>
  )
}
