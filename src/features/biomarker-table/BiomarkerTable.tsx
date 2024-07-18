import React, { useState } from 'react'
import { BIOMARKERS } from '../../constants/biomarkers'
import { Col } from '../../library/Col'
import { useActiveProfileQuery } from '~src/api/profiles-api'
import { useNavigate } from 'react-router-dom'
import { Button } from '~src/library/Button'
import {
  faCaretDown,
  faCaretUp,
  faCheck,
  faFileUpload,
  faLineChart,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'
import { useToggleAddBloodMetricsModal } from '~src/modals/add-blood-metrics-modal/slice'
import { abbrNumber, getMinMaxForMetric } from '~src/utils/utils'
import { Row } from '~src/library/Row'
import { TabGroup } from '~src/library/TabGroup'
import Table from '~src/library/table/Table'
import { BiomarkerStatus } from '../biomarker-status/BiomarkerStatus'
import { useToggleUploadFileModal } from '~src/modals/upload-file-modal/slice'
import { DatePicker } from '~src/library/form/DatePicker'
import { BiomarkerMeasurement } from '~src/types/user-types'
import { BLOOD_BIOMARKER_CATEGORIES } from '~src/constants/biomarker-categories'
import { Tag, TagSelect } from '~src/library/form/TagSelect'
import {
  saveSelectedCategories,
  useSelectedCategoriesQuery,
} from '~src/api/settings-api'
import { BiomarkerId } from '~src/types/biomarker-types'
import { sortByTimestampInReverseChronologicalOrder } from '~src/utils/date'

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

export function BiomarkerTable() {
  const navigate = useNavigate()
  const { data: userData, isFetching } = useActiveProfileQuery()
  const { data: selectedCategories, refetch: refetchCategories } =
    useSelectedCategoriesQuery()
  const [date, setDate] = useState<Date | null>(null)
  const [selectedItems, setSelectedItems] = useState<BiomarkerId[]>([])
  const items = BIOMARKERS.map<DisplayedItem>((m) => {
    let measurement: BiomarkerMeasurement | undefined = (userData?.biomarkers[
      m.id
    ]?.sort(sortByTimestampInReverseChronologicalOrder) ?? [])?.[0]
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

  const toggleAddBloodMetricsModal = useToggleAddBloodMetricsModal()
  const toggleUploadFileModal = useToggleUploadFileModal()
  const [filter, setFilter] = useState<Filter>(null)
  const { optimized, low, high, all } = items.reduce(
    (acc, item) => {
      if (item.value === undefined || item.value === null) {
        acc.all.push(item)
        return acc
      }
      const { min, max } = getMinMaxForMetric(item.id, userData?.demographic)
      if (item.value < min) {
        item.status = 'low'
        acc.low.push(item)
      } else if (item.value > max) {
        item.status = 'high'
        acc.high.push(item)
      } else {
        item.status = 'optimized'
        acc.optimized.push(item)
      }
      acc.all.push(item)
      return acc
    },
    { optimized: [], low: [], high: [], all: [] } as {
      optimized: typeof items
      low: typeof items
      high: typeof items
      all: typeof items
    },
  )
  const displayedItems = !filter
    ? items
    : filter === 'optimized'
      ? optimized
      : filter === 'low'
        ? low
        : high
  return (
    <Col gap="1rem">
      <Row
        gap="1rem"
        style={{ justifyContent: 'space-between', alignItems: 'center' }}
      >
        <h1>Biomarkers</h1>
        <Row gap="1rem">
          <Button
            text="Import results"
            preIcon={faFileUpload}
            onClick={() => toggleUploadFileModal(true)}
          />
          <Button
            text="Add measurement"
            preIcon={faPlus}
            onClick={() => toggleAddBloodMetricsModal(true)}
          />
        </Row>
      </Row>
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
      <Table<(typeof items)[0]>
        hidePagination
        items={displayedItems.sort((a, b) => {
          return a.status === 'high'
            ? -1
            : b.status === 'high'
              ? 1
              : a.status === 'low'
                ? -1
                : b.status === 'low'
                  ? 1
                  : a.status === 'optimized'
                    ? -1
                    : b.status === 'optimized'
                      ? 1
                      : 0
        })}
        className="table-card"
        itemGroupLabel="Biomarkers"
        pluralItemLabel="biomarkers"
        pageSize={100}
        selectedItems={displayedItems.filter((d) =>
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
              const { min, max } = getMinMaxForMetric(id, userData?.demographic)
              if (!min && !max) {
                return 'TBD'
              }

              return (
                <Row
                  gap="0.3rem"
                  style={{ alignItems: 'center', whiteSpace: 'nowrap' }}
                >
                  <span style={{ fontWeight: '500' }}>
                    {min === 0 ? '<' : `${abbrNumber(min)} -`} {abbrNumber(max)}
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
        ]}
      />
    </Col>
  )
}
