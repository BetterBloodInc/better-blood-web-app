import React from 'react'
import {
  CartesianGrid,
  DotProps,
  Line,
  LineChart,
  Rectangle,
  ReferenceArea,
  ResponsiveContainer,
  Text,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { useActiveProfileQuery } from '~src/api/profiles-api'
import { PRIMARY_COLOR, TERTIARY_COLOR } from '~src/constants/theme'
import { Col } from '~src/library/Col'
import { useDarkModeSelector } from '~src/theme-slice'
import { Biomarker } from '~src/types/biomarker-types'
import { BiomarkerMeasurement } from '~src/types/user-types'
import { abbrNumber, getMinMaxForMetric } from '~src/utils/utils'

export function MetricLineChart({
  metric,
  data,
}: {
  metric: Biomarker
  data: BiomarkerMeasurement[]
}) {
  const isDarkMode = useDarkModeSelector()
  const { data: userData, isFetching } = useActiveProfileQuery()
  const demographic = userData?.demographic
  const { min, max } = getMinMaxForMetric(metric.id, demographic)

  const formattedData = data.map((m) => ({
    ...m,
    date: new Date(m.timestamp).toISOString().split('T')[0],
  }))

  const baseColor = isDarkMode ? '#FFF' : '#000'

  if (!formattedData.length) {
    return <></>
  }

  return (
    <Col
      gap="2rem"
      style={{
        padding: '2rem 2rem 1rem',
        flexGrow: 1,
        backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : '#FFF',
        boxShadow: isDarkMode
          ? undefined
          : 'inset 0 0 0 1px rgba(0, 0, 0, 0.1)',
        borderRadius: 4,
      }}
    >
      <h3>Measurements</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedData}
          margin={{ top: 8, right: 8, left: 35, bottom: 60 }}
        >
          <CartesianGrid stroke={isDarkMode ? '#FFF1' : '#0001'} />
          <XAxis dataKey="date" tick={(props) => <DateTick {...props} />} />
          <YAxis
            tick={{ color: baseColor, fill: baseColor }}
            dx={-10}
            domain={[min * 0.8, max * 1.2]}
            tickFormatter={(value) => abbrNumber(value)}
            label={{
              value: metric.measurementUnit,
              angle: -90,
              position: 'center',
              fill: isDarkMode ? '#fff9' : '#0009',
              dx: -55,
            }}
          />
          <Tooltip
            itemStyle={{ color: isDarkMode ? '#fff9' : '#0009' }}
            contentStyle={{
              background: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(2px)',
              border: 'none',
              borderRadius: '8px',
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            name={metric.name}
            stroke={isDarkMode ? '#FFF3' : '#0003'}
            dot={(props) => <CustomDot {...props} min={min} max={max} />}
          />
          <ReferenceArea
            x1={formattedData?.[0]?.date}
            x2={formattedData[data.length - 1].date}
            y1={min}
            y2={max}
            fill="#06D6A0"
            fillOpacity={0.1}
          />
        </LineChart>
      </ResponsiveContainer>
    </Col>
  )
}

const CustomDot = (
  props: DotProps & { value: any; min: number; max: number },
) => {
  const { cx, cy, min, max, value } = props
  if (value > max || value < min) {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={6}
        stroke={PRIMARY_COLOR}
        strokeWidth="3px"
        fill="transparent"
      />
    )
  } else {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={6}
        stroke={TERTIARY_COLOR}
        strokeWidth="3px"
        fill="transparent"
      />
    )
  }
}

const DateTick = (props: any) => {
  const isDarkMode = useDarkModeSelector()
  const { x, y, stroke, payload } = props
  const [year, month, day] = payload.value.split('-')
  const monthAsText = new Date(`${year}-${month}-10`).toLocaleString(
    'default',
    { month: 'short' },
  )
  const baseY = 10
  return (
    <g transform={`translate(${x},${y})`}>
      <Rectangle
        width={50}
        height={66}
        x={-25}
        y={baseY}
        fill={isDarkMode ? '#fff1' : '#0001'}
        stroke={stroke}
        radius={4}
      />
      <Text
        x={0}
        y={baseY + 10}
        dy={6}
        textAnchor="middle"
        fill={isDarkMode ? '#FFF' : '#000'}
        fontSize="12"
      >
        {monthAsText.toUpperCase()}
      </Text>
      <Text
        x={0}
        y={baseY + 32}
        dy={6}
        textAnchor="middle"
        fill={isDarkMode ? '#FFF' : '#000'}
        fontWeight="500"
        fontSize="18"
      >
        {day}
      </Text>
      <Text
        x={0}
        y={baseY + 50}
        dy={6}
        textAnchor="middle"
        fill={isDarkMode ? '#FFF' : '#000'}
        fontSize="12"
      >
        {year}
      </Text>
    </g>
  )
}
