import React from 'react'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RESOURCES } from '~src/constants/resources'
import { ResourceId } from '~src/types/resource-types'

export function ResourceLink({
  resourceId,
}: {
  resourceId: ResourceId
}): JSX.Element {
  const resource = RESOURCES[resourceId]
  if (!resource) {
    return <div>Resource not found</div>
  }
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noreferrer"
      style={{ fontSize: 14 }}
    >
      {resource.title} ({resource.when_published}){' '}
      <FontAwesomeIcon icon={faExternalLink} style={{ fontSize: 12 }} />
    </a>
  )
}
