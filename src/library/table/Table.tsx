import React, { PropsWithChildren, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowDown,
  faArrowUp,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import { Input } from '../form/Input'
import { Checkbox } from '../Checkbox'
import { FilterResultsCount } from './filter-results-count/FilterResultsCount'
import { Pagination } from './pagination/Pagination'
import {
  ColumnDefinition,
  ItemSelect,
  RowClick,
  TableProps,
} from './TableProps'
import './Table.scss'
import { Row } from '../Row'

function mapItemsToRows<E>({
  items,
  columnDefinitions,
  onRowClick,
  selectedItems,
  onSelectItem,
}: {
  items: E[]
  columnDefinitions: ColumnDefinition<E>[]
  onRowClick?: RowClick<E>
  selectedItems?: E[]
  onSelectItem?: ItemSelect<E>
}) {
  return items.map((item, i) => (
    <tr
      key={i}
      className={onRowClick ? 'clickable' : ''}
      onClick={(e) => onRowClick && onRowClick(item, i)}
    >
      {onSelectItem && (
        <td
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <Checkbox
            id={'select-' + Math.random().toString()}
            value={selectedItems?.includes(item) || false}
            onChange={() => onSelectItem(item)}
          />
        </td>
      )}
      {columnDefinitions.map((column, j) => (
        <td key={j} className={column.cellClassName || 'p-3'}>
          {column.render
            ? column.render(item, i)
            : !(item as any)[column.key] && (item as any)[column.key] !== 0
              ? column.emptyLabel
              : (item as any)[column.key]}
        </td>
      ))}
    </tr>
  ))
}

const PAGE_SIZE = 25

export function Table<E>({
  className,
  items,
  itemGroupLabel,
  emptyMessage,
  additionalFilters,
  actions,
  onRowClick,
  columnDefinitions,
  theme,
  pluralItemLabel,
  customFilter,
  bottomPagination = true,
  hideSearch,
  hidePagination,
  totalItemCount,
  pageSize = PAGE_SIZE,
  defaultPage = 1,
  onSelectItem,
  selectedItems,
  onSelectAll,
}: PropsWithChildren<TableProps<E>>) {
  const [query, setQuery] = useState('')
  const [sortColumn, setSortColumn] = useState<number | null>(null)
  const [sortDesc, setSortDesc] = useState(false)
  const [page, setPage] = useState(defaultPage)
  useEffect(() => {
    setPage(defaultPage)
  }, [defaultPage])

  const filteredItems = items
    .filter((item) => {
      if (!query) {
        return true
      } else {
        if (customFilter) {
          return customFilter(query.toLowerCase(), item)
        }
        for (let key in item) {
          if (
            (item[key] as any)
              ?.toString()
              .toLowerCase()
              .includes(query.toLowerCase())
          ) {
            return true
          }
        }
      }
      return false
    })
    .sort((a: any, b: any) => {
      if (sortColumn === null) {
        return 0
      }
      const column = columnDefinitions[sortColumn]
      if (column.getSortKey) {
        if (column.getSortKey(a) < column.getSortKey(b)) {
          return sortDesc ? 1 : -1
        }
        if (column.getSortKey(a) > column.getSortKey(b)) {
          return sortDesc ? -1 : 1
        }
      } else {
        const key = column.key
        if ((a[key] ?? 0) < (b[key] ?? 0)) {
          return sortDesc ? 1 : -1
        }
        if ((a[key] ?? 0) > (b[key] ?? 0)) {
          return sortDesc ? -1 : 1
        }
      }
      return 0
    })
  const pagedItems = filteredItems.slice((page - 1) * pageSize, page * pageSize)
  const totalPages = Math.ceil(
    (totalItemCount || filteredItems.length) / pageSize,
  )
  return (
    <div
      className={`table ${theme || ''} ${className || ''} ${
        onRowClick && 'selectable'
      }`}
    >
      <header className={actions ? 'table-with-actions' : ''}>
        <Row gap="0.5rem">
          {!hideSearch ? (
            <Input
              type="text"
              prefixIcon={faSearch}
              placeholder={`Search ${pluralItemLabel}`}
              value={query}
              onChangeValue={(e) => {
                setQuery(e as string)
                setPage(1)
              }}
            />
          ) : (
            ''
          )}
          {additionalFilters}
        </Row>
        {actions ? <div className="table-actions">{actions}</div> : ''}
      </header>
      {!hidePagination ? (
        <div className="table-filters">
          <FilterResultsCount
            page={page}
            pageSize={pageSize}
            pageItems={pagedItems.length}
            totalItems={totalItemCount || filteredItems.length}
            itemLabel={itemGroupLabel}
            pluralItemLabel={pluralItemLabel}
          />
          <Pagination
            totalPages={totalPages}
            page={page}
            onPageChange={setPage}
          />
        </div>
      ) : (
        ''
      )}
      <main>
        {!pagedItems || !pagedItems.length ? (
          <section className="table-empty-message">
            {emptyMessage || !items.length ? (
              <div>There are no {pluralItemLabel}.</div>
            ) : (
              <div>There are no {pluralItemLabel} that match your search.</div>
            )}
          </section>
        ) : (
          <table>
            <thead>
              <tr>
                {onSelectItem && (
                  <th>
                    {onSelectAll && (
                      <Checkbox
                        id={`select-all-${Math.random().toString()}`}
                        value={selectedItems?.length === items.length}
                        onChange={() => onSelectAll(items)}
                      />
                    )}
                  </th>
                )}
                {columnDefinitions.map((column, i) => (
                  <th
                    key={i}
                    onClick={() => {
                      if (column.sortDisabled) return
                      if (sortColumn === i) {
                        setSortDesc(!sortDesc)
                      }
                      setSortColumn(i)
                    }}
                    className={`${sortColumn === i ? 'active' : ''} ${column.rightAlignHeader ? 'right-align' : ''}`}
                  >
                    {column.label}{' '}
                    {sortColumn === i && (
                      <FontAwesomeIcon
                        icon={sortDesc ? faArrowDown : faArrowUp}
                        fontSize="10"
                        style={{ marginLeft: 4 }}
                      />
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mapItemsToRows<E>({
                items: pagedItems,
                columnDefinitions,
                onRowClick,
                selectedItems,
                onSelectItem,
              })}
            </tbody>
          </table>
        )}
      </main>
      <footer>
        {bottomPagination && !hidePagination && (
          <div className="table-filters">
            <FilterResultsCount
              page={page}
              pageSize={pageSize}
              pageItems={pagedItems.length}
              totalItems={filteredItems.length}
              itemLabel={itemGroupLabel}
              pluralItemLabel={pluralItemLabel}
            />
            <Pagination
              totalPages={totalPages}
              page={page}
              onPageChange={setPage}
            />
          </div>
        )}
      </footer>
    </div>
  )
}

export default Table
