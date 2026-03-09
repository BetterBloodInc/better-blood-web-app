import React, { useState, useMemo } from 'react'
import { BIOMARKERS } from '../../constants/biomarkers'
import { Col } from '../../library/Col'
import { useActiveProfileQuery } from '~src/api/profiles-api'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  faCaretDown,
  faCaretUp,
  faCheck,
  faExternalLinkAlt,
  faPlus,
  faThumbtack,
} from '@fortawesome/free-solid-svg-icons'
import { abbrNumber, getMinMaxForMetric } from '~src/utils/utils'
import { Row } from '~src/library/Row'
import { TabGroup } from '~src/library/TabGroup'
import Table from '~src/library/table/Table'
import { BiomarkerStatus } from '../biomarker-status/BiomarkerStatus'
import { DatePicker } from '~src/library/form/DatePicker'
import { BiomarkerMeasurement } from '~src/types/user-types'
import { BLOOD_BIOMARKER_CATEGORIES } from '~src/constants/biomarker-categories'
import { Tag, TagSelect } from '~src/library/form/TagSelect'
import {
  saveSelectedCategories,
  useSelectedCategoriesQuery,
  usePinnedBiomarkerIdsQuery,
  useTogglePinnedBiomarker,
} from '~src/api/settings-api'
import { BiomarkerId } from '~src/types/biomarker-types'
import { sortByTimestampInReverseChronologicalOrder } from '~src/utils/date'
import { IconButton } from '~src/library/IconButton'
import { useToggleAddBloodMetricsModal } from '~src/modals/add-blood-metrics-modal/slice'
import './BiomarkerTable.scss'

type Filter = 'optimized' | 'low' | 'high' | null

type DisplayedItem = {
  id: BiomarkerId
  categories: string[]
  name: string
  value: number | null | undefined
  date: number | null | undefined
  units: string
  status: 'optimized' | 'low' | 'high' | undefined
}

function getStatusParam(searchParams: URLSearchParams): Filter {
  const s = searchParams.get('status')
  return s === 'optimized' || s === 'low' || s === 'high' ? s : null
}

export function BiomarkerTable() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const { data: userData } = useActiveProfileQuery()
  const { data: selectedCategories, refetch: refetchCategories } =
    useSelectedCategoriesQuery()
  const { data: pinnedIds = [] } = usePinnedBiomarkerIdsQuery()
  const togglePinned = useTogglePinnedBiomarker()
  const toggleAddBloodMetricsModal = useToggleAddBloodMetricsModal()
  const [date, setDate] = useState<Date | null>(null)
  const [selectedItems, setSelectedItems] = useState<BiomarkerId[]>([])
  const filter = getStatusParam(searchParams)
  const setFilter = (value: Filter) => {
    const next = new URLSearchParams(searchParams)
    if (value) next.set('status', value)
    else next.delete('status')
    setSearchParams(next, { replace: true })
  }
  const items = BIOMARKERS.map<DisplayedItem>((m) => {
    const sorted = [...(userData?.biomarkers[m.id] ?? [])].sort(
      sortByTimestampInReverseChronologicalOrder,
    )
    let measurement: BiomarkerMeasurement | undefined = sorted[0]
    if (date) {
      measurement = userData?.biomarkers[m.id]?.find(
        (m) => new Date(m.timestamp).toDateString() === date.toDateString(),
      )
    }
    return {
      id: m.id,
      categories: m.categories,
      name: m.name,
      value: measurement?.value,
      date: measurement?.timestamp,
      units: m.measurementUnit,
      status: undefined,
    }
  })
    .filter(
      (m) =>
        !date ||
        (m.date && new Date(m.date).toDateString() === date.toDateString()),
    )
    .filter((m) => {
      if (!selectedCategories?.length) {
        return true
      }
      return selectedCategories.find((c) => m.categories.includes(c))
    })

  const itemsWithStatus = useMemo(() => {
    return items.map((item) => {
      if (item.value === undefined || item.value === null) {
        return { ...item, status: undefined as DisplayedItem['status'] }
      }
      const customReferenceRange =
        item.id && userData?.referenceRanges?.[item.id]
      const { min, max } = getMinMaxForMetric(
        item.id,
        userData?.demographic,
        customReferenceRange,
      )
      if (item.value < min) return { ...item, status: 'low' as const }
      if (item.value > max) return { ...item, status: 'high' as const }
      return { ...item, status: 'optimized' as const }
    })
  }, [items, userData?.referenceRanges, userData?.demographic])

  const { optimized, low, high } = useMemo(
    () =>
      itemsWithStatus.reduce(
        (acc, item) => {
          if (item.status === 'low') acc.low.push(item)
          else if (item.status === 'high') acc.high.push(item)
          else if (item.status === 'optimized') acc.optimized.push(item)
          return acc
        },
        {
          optimized: [] as DisplayedItem[],
          low: [] as DisplayedItem[],
          high: [] as DisplayedItem[],
        },
      ),
    [itemsWithStatus],
  )

  const displayedItems = !filter
    ? itemsWithStatus
    : filter === 'optimized'
      ? optimized
      : filter === 'low'
        ? low
        : high

  const sortedDisplayedItems = useMemo(() => {
    const byStatus = [...displayedItems].sort((a, b) => {
      const order = { high: 0, low: 1, optimized: 2, undefined: 3 }
      return (order[a.status ?? 'undefined'] ?? 3) - (order[b.status ?? 'undefined'] ?? 3)
    })
    const pinned = byStatus.filter((d) => pinnedIds.includes(d.id))
    const rest = byStatus.filter((d) => !pinnedIds.includes(d.id))
    return [...pinned, ...rest]
  }, [displayedItems, pinnedIds])
  return (
    <Col gap="1rem">
      <Row>
        <Row gap="2rem" style={{ alignItems: 'center' }}>
          <TabGroup<Filter>
            options={[
              {
                label: `${optimized.length} Optimized`,
                value: 'optimized',
                icon: faCheck,
              },
              {
                label: `${low.length} Low`,
                value: 'low',
                icon: faCaretDown,
              },
              {
                label: `${high.length} High`,
                value: 'high',
                icon: faCaretUp,
              },
            ]}
            setValue={(e) => setFilter(e === filter ? null : e)}
            value={filter}
          />
        </Row>
      </Row>
      <Row gap="0.5rem" style={{ alignItems: 'center', overflowX: 'auto' }}>
        <Tag
          label="All categories"
          isSelected={!selectedCategories?.length}
          onClick={() => {
            saveSelectedCategories([])
            refetchCategories()
            return
          }}
        />
        <TagSelect
          options={[
            ...BLOOD_BIOMARKER_CATEGORIES.map((c) => ({
              label: c,
              value: c,
            })),
          ]}
          value={selectedCategories ?? []}
          onChange={(data) => {
            saveSelectedCategories(data)
            refetchCategories()
          }}
          isMulti
        />
      </Row>
      <Table<(typeof itemsWithStatus)[0]>
        hidePagination
        items={sortedDisplayedItems}
        className="table-card"
        itemGroupLabel="Biomarkers"
        pluralItemLabel="biomarkers"
        pageSize={100}
        selectedItems={sortedDisplayedItems.filter((d) =>
          selectedItems.includes(d.id),
        )}
        // onSelectAll={(all) =>
        //   setSelectedItems((selections) =>
        //     selections.length === all.length ? [] : all.map((item) => item.id),
        //   )
        // }
        // onSelectItem={(selectedItem) => {
        //   setSelectedItems((existingItems) =>
        //     existingItems.includes(selectedItem.id)
        //       ? existingItems.filter((i) => i !== selectedItem.id)
        //       : [...existingItems, selectedItem.id],
        //   )
        // }}
        onRowClick={(item) => navigate(`/biomarkers/${item.id}`)}
        additionalFilters={
          <DatePicker
            onChange={setDate}
            selected={date}
            placeholderText="Filter by Date"
            style={{ width: 180 }}
          />
        }
        // actions={
        //   <Row gap="1rem">
        //     <Button
        //       text="Correlate selected biomarkers"
        //       preIcon={faLineChart}
        //       onClick={() => {
        //         if (selectedItems.length < 2) {
        //           toast.error(
        //             'Please select at least two biomarkers to correlate',
        //           )
        //           return
        //         }
        //         toast('Coming soon')
        //       }}
        //     />
        //   </Row>
        // }
        columnDefinitions={[
          {
            key: 'id',
            label: 'ID',
            render: ({ id }) => id.replace('_PCT', ' %'),
          },
          {
            key: 'name',
            label: 'Biomarker',
            render: ({ name, categories }) => {
              return (
                <Col gap="0.5rem">
                  <div>{name}</div>
                  <div style={{ opacity: 0.5 }}>{categories.join(', ')}</div>
                </Col>
              )
            },
          },
          {
            key: 'status',
            label: 'Status',
            sortDisabled: true,
            render: ({ id, value }) => {
              return <BiomarkerStatus biomarkerId={id} value={value} />
            },
          },
          {
            key: 'value',
            label: 'Latest Value',
            render: ({ value, units }) => {
              return value != undefined ? (
                <Row
                  gap="0.3rem"
                  style={{ alignItems: 'center', whiteSpace: 'nowrap' }}
                >
                  <span style={{ fontWeight: '500' }}>{value}</span>{' '}
                  <span style={{ opacity: 0.5 }}>{units}</span>
                </Row>
              ) : (
                '-'
              )
            },
          },
          {
            key: 'value',
            label: 'Optimal Range',
            sortDisabled: true,
            render: ({ id, units }) => {
              const customReferenceRange = id && userData?.referenceRanges?.[id]
              const { min, max } = getMinMaxForMetric(
                id,
                userData?.demographic,
                customReferenceRange,
              )
              if (!min && !max) {
                return 'TBD'
              }

              return (
                <Row
                  gap="0.3rem"
                  style={{ alignItems: 'center', whiteSpace: 'nowrap' }}
                >
                  <span style={{ fontWeight: '500' }}>
                    {min === 0
                      ? '<'
                      : max === 0
                        ? `> ${abbrNumber(min)}`
                        : `${abbrNumber(min)} -`}{' '}
                    {max !== 0 && abbrNumber(max)}
                  </span>{' '}
                  <span style={{ opacity: 0.5 }}>{units}</span>
                </Row>
              )
            },
          },
          {
            key: 'date',
            label: 'Last Measured',
            render: ({ date }) => {
              return date ? new Date(date).toLocaleDateString() : '-'
            },
          },
          {
            key: 'actions',
            label: '',
            sortDisabled: true,
            cellClassName: 'biomarker-row-actions-cell',
            rightAlignHeader: true,
            render: (item) => (
              <div
                className="biomarker-row-actions"
                onClick={(e) => e.stopPropagation()}
              >
                <IconButton
                  tooltip={pinnedIds.includes(item.id) ? 'Unpin' : 'Pin to top'}
                  icon={faThumbtack}
                  onClick={() => togglePinned(item.id)}
                />
                <IconButton
                  tooltip="Add measurement"
                  icon={faPlus}
                  onClick={() => toggleAddBloodMetricsModal(true)}
                />
                <IconButton
                  tooltip="View detail"
                  icon={faExternalLinkAlt}
                  onClick={() => navigate(`/biomarkers/${item.id}`)}
                />
              </div>
            ),
          },
        ]}
      />
    </Col>
  )
}
