import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import { App } from './App'

const container = document.getElementById('root') as HTMLElement

const root = createRoot(container)

const renderApp = async () => {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
}

renderApp()
