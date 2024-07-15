import React from 'react'
import './FilterResultsCount.scss'

interface Props {
  page: number
  pageSize: number
  pageItems: number
  totalItems: number
  itemLabel: string
  pluralItemLabel: string
}

export const FilterResultsCount: React.FC<Props> = ({
  page,
  pageSize,
  pageItems,
  totalItems,
  itemLabel,
  pluralItemLabel,
}) => (
  <div className="filter-results-count">
    Showing <strong>{pageSize * (page - 1) + (pageItems ? 1 : 0)}</strong> to{' '}
    <strong>{(page - 1) * pageSize + pageItems}</strong> out of{' '}
    <strong>{totalItems}</strong>{' '}
    {totalItems === 1 ? itemLabel : pluralItemLabel}
  </div>
)
