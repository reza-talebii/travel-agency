import { FC, ReactNode } from 'react'
import { IdentityLayout } from '@/layout'

const IdentityTemplate: FC<{ children: ReactNode }> = ({ children }) => {
  return <IdentityLayout>{children}</IdentityLayout>
}

export default IdentityTemplate
