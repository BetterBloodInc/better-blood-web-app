import React from 'react'
import { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import { useDarkModeSelector } from '~src/theme-slice'
import './Modal.scss'

const customStyles = {
  overlay: {
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.3s ease-in-out', // Add transition property
    opacity: 0, // Set initial opacity to 0
  },
  content: {
    overflow: 'visible',
    position: 'relative',
    inset: 0,
  },
}

export type ModalProps = {
  isVisible: boolean
  onClose(): void
  style?: any
  children: React.ReactNode
}

const AppElement = document.getElementById('App')

export const Modal = ({ isVisible, onClose, children, style }: ModalProps) => {
  const darkMode = useDarkModeSelector()
  const [isModalVisible, setIsModalVisible] = useState(isVisible)

  useEffect(() => {
    setIsModalVisible(isVisible)
  }, [isVisible])

  const handleModalClose = () => {
    setIsModalVisible(false)
    onClose()
  }

  useEffect(() => {
    if (isModalVisible) {
      // Delay setting opacity to 1 to allow the fade-in effect
      setTimeout(() => {
        document.body.style.overflow = 'hidden' // Prevent scrolling when modal is open
        customStyles.overlay.opacity = 1
      }, 0)
    } else {
      document.body.style.overflow = '' // Restore scrolling when modal is closed
      customStyles.overlay.opacity = 0
    }
  }, [isModalVisible])

  return (
    <ReactModal
      parentSelector={() => document.getElementById('App') ?? document.body}
      isOpen={isModalVisible}
      style={{
        overlay: customStyles.overlay,
        content: { ...customStyles.content, ...style },
      }}
      onRequestClose={handleModalClose}
      closeTimeoutMS={300}
      className={`modal ${darkMode ? 'dark-mode' : ''} ${isModalVisible ? 'modal-fade-in' : 'modal-fade-out'}`}
      appElement={AppElement ?? undefined}
    >
      {children}
    </ReactModal>
  )
}
