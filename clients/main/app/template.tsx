import MainLayout from '@/layout/main'
import { FC, ReactNode } from 'react'

const Page: FC<{ children: ReactNode }> = ({ children }) => {
  return <MainLayout>{children}</MainLayout>
}

export default Page
