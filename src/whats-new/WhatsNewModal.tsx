import React from 'react'
import { Modal } from '~src/library/Modal'
import { Col } from '~src/library/Col'
import {
  useWhatsNewClose,
  useWhatsNewIsOpen,
} from './slice'
import { CHANGELOG_ENTRIES, CHANGELOG_VERSION } from '~src/constants/changelog'
import { saveChangelogLastSeen } from '~src/api/settings-api'
import { useQueryClient } from '@tanstack/react-query'
import './WhatsNewModal.scss'

export function WhatsNewModal() {
  const isOpen = useWhatsNewIsOpen()
  const close = useWhatsNewClose()
  const queryClient = useQueryClient()

  const handleClose = () => {
    saveChangelogLastSeen(CHANGELOG_VERSION)
    queryClient.setQueryData(['useChangelogLastSeenQuery'], CHANGELOG_VERSION)
    close()
  }

  return (
    <Modal
      isVisible={isOpen}
      onClose={handleClose}
      contentLabel="What's new"
      style={{ maxWidth: 480, maxHeight: '85vh' }}
    >
      <Col className="WhatsNewModal" gap="1rem">
        <h2>What&apos;s new</h2>
        <p className="WhatsNewModal-intro">
          Recent updates and improvements to Better Blood.
        </p>
        <div className="WhatsNewModal-list">
          {CHANGELOG_ENTRIES.map((entry) => (
            <section key={entry.version} className="WhatsNewModal-entry">
              <h3>
                {entry.title} <span className="WhatsNewModal-meta">v{entry.version}</span>
              </h3>
              <ul>
                {entry.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Col>
    </Modal>
  )
}
