import clsx from 'clsx'
import React from 'react'

const Label = ({
  children,
  animateRerendering,
  color,
}: {
  children: React.ReactNode
  animateRerendering?: boolean
  color?: 'default' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange'
}) => {
  return <div>{children}</div>
}
export const Boundary = ({
  children,
  labels = ['children'],
  size = 'default',
  color = 'default',
  animateRerendering = true,
}: {
  children: React.ReactNode
  labels?: string[]
  size?: 'small' | 'default'
  color?: 'default' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange'
  animateRerendering?: boolean
}) => {
  return (
    <div>
      <div>
        {labels.map(label => {
          return (
            <Label key={label} color={color} animateRerendering={animateRerendering}>
              {/* {label} */}
            </Label>
          )
        })}
      </div>

      {children}
    </div>
  )
}
