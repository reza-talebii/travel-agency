import LayoutAccount from '@/layout/Account'
import MainLayout from '@/layout/main'
import { FC, ReactNode } from 'react'

const Page: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MainLayout>
      <LayoutAccount>{children}</LayoutAccount>
    </MainLayout>
  )
}

export default Page
