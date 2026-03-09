import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import BloodLogPage from './pages/blood-log/BiomarkersPage'
import AboutPage from './pages/about/AboutPage'
import NotFoundPage from './pages/404Page'
import ExerciseLogPage from './pages/exercise-log/ExerciseLogPage'
import DietLogPage from './pages/diet-log/DietLogPage'
import ProfilePage from './pages/profile/ProfilePage'
import HomePage from './pages/home/HomePage'
import BiomarkerPage from './pages/biomarker/BiomarkerPage'
import AIChatPage from './pages/aichat/AIChatPage'
import DisclaimerPage from './pages/Disclaimer'
import SettingsPage from './pages/settings/SettingsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/biomarkers',
    element: <BloodLogPage />,
  },

  {
    path: '/biomarkers/:biomarkerId',
    element: <BiomarkerPage />,
  },
  // {
  //   path: '/exercise-log',
  //   element: <ExerciseLogPage />,
  // },
  // {
  //   path: '/diet-log',
  //   element: <DietLogPage />,
  // },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/settings',
    element: <SettingsPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/ai-chat',
    element: <AIChatPage />,
  },
  {
    path: '/disclaimer',
    element: <DisclaimerPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
