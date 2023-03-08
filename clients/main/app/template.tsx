import MainLayout from '@/layout'
import { FC, ReactNode } from 'react'

const Page: FC<{ children: ReactNode }> = ({ children }) => {
  return <MainLayout>{children}</MainLayout>
}

export default Page
