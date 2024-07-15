import React from 'react'
import './StatusCircle.scss'

export type Status = 'good' | 'bad' | 'ok' | 'unknown';

export function StatusCircle({ status }: { status: 'good' | 'bad' | 'ok' | 'unknown' }) {
  return <div className={`status-circle ${status}`}></div>
}
