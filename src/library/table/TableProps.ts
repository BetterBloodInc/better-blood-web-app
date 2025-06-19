export type RowClick<E> = (item: E, index?: number) => void
export type ItemSelect<E> = (item: E, index?: number) => void
export type SelectAllItems<E> = (items: E[]) => void

export type TableTheme = 'table-card'

export interface ColumnDefinition<E> {
  key: string
  label?: string
  cellClassName?: string
  render?(item: E, index: number): any
  emptyLabel?: string
  getSortKey?(item: E): any
  sortDisabled?: boolean
  rightAlignHeader?: boolean;
}

export interface TableProps<E> {
  items: E[]
  itemGroupLabel: string
  pluralItemLabel: string
  emptyMessage?: string
  additionalFilters?: any;
  actions?: any
  onRowClick?: RowClick<E>
  columnDefinitions: ColumnDefinition<E>[]
  theme?: TableTheme
  className?: string
  customFilter?(query: string, item: E): boolean
  bottomPagination?: boolean
  hideSearch?: boolean
  hidePagination?: boolean
  totalItemCount?: number
  onLoadMoreItems?(): void
  pageSize?: number
  defaultPage?: number
  onSelectItem?: ItemSelect<E>
  selectedItems?: E[]
  onSelectAll?: SelectAllItems<E>
}
