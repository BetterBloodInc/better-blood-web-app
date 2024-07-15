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
import { UploadFileModal } from './modals/upload-file-modal/UploadFileModal'
import './reset.css'
import './App.scss'

const queryClient = new QueryClient()

export function App() {
  const darkMode = useDarkModeSelector()
  const { isVisible: isConversationDrawerVisible } = useAppSelector(
    (state) => state.conversationDrawer,
  )
  useEffect(() => {
    const app = document.getElementById('App') as HTMLElement
    ReactModal.setAppElement(app)
  }, [])
  return (
    <div id="App" className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        {isConversationDrawerVisible && <ConversationDrawer />}
        <UploadFileModal />
        <Toaster />
        <Tooltip />
      </QueryClientProvider>
    </div>
  )
}
