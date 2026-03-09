import React from 'react'
import './Skeleton.scss'
export function Skeleton({
  width,
  height,
  radius,
  ...rest
}: {
  width: number | string
  height: number | string
  radius?: number | string
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...rest}
      className="Skeleton"
      style={{
        width,
        height,
        borderRadius: radius ?? 0,
      }}
    >
      <div className="SkeletonAnimation" />
    </div>
  )
}
