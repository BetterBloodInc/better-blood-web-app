import React from 'react'
import { Page } from '../layout/Page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHelmetSafety } from '@fortawesome/free-solid-svg-icons'
import { SECONDARY_COLOR } from '~src/constants/theme'

const ComingSoonPage: React.FC = () => {
  return (
    <Page>
      <FontAwesomeIcon
        icon={faHelmetSafety}
        size="5x"
        color={SECONDARY_COLOR}
      />
      <h1>Coming Soon</h1>
      <p>This page is under construction. Please check back later.</p>
    </Page>
  )
}

export default ComingSoonPage
