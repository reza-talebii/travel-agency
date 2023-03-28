import RoutesAnimation from '@/components/RoutesAnimation'
import React, { FC, ReactNode } from 'react'

const Template: FC<{ children: ReactNode }> = ({ children }) => {
  return <RoutesAnimation>{children}</RoutesAnimation>
}

export default Template
