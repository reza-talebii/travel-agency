'use client'

import ImageUi from '@/components/UI/Image'
import React, { FC, ReactNode } from 'react'
import { AccountLayoutStyled } from './styles'
import cover from '@images/account/cover.svg'
import { Avatar, Tabs, TabsProps, Typography } from 'antd'
import { usePathname } from 'next/navigation'
import { ROUTES } from '@/models'
import Link from 'next/link'

const LayoutAccount: FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname()

  const tabItems: TabsProps['items'] = [
    {
      key: ROUTES.account,
      label: <Link href={ROUTES.account}>Account</Link>,
      children: children,
    },
    {
      key: ROUTES.transactionHistory,
      label: <Link href={ROUTES.transactionHistory}>History</Link>,
      children: children,
    },
    {
      key: ROUTES.paymentMethods,
      label: <Link href={ROUTES.paymentMethods}>Payment methods</Link>,
      children: children,
    },
  ]

  return (
    <AccountLayoutStyled>
      <section className="relative !min-h-[550px]">
        <ImageUi src={cover} alt="cover" width="100%" height="350px" className="cover" />

        <section className="userInfo">
          <Avatar src={'/assets/images/banksIcon/ansar.png'} className="avatar" />
          <Typography.Title className="title" level={5}>
            name
          </Typography.Title>
          <Typography.Text className="subtitle">lastName@gmail.com</Typography.Text>
        </section>
      </section>

      <Tabs defaultActiveKey={ROUTES.account} items={tabItems} activeKey={pathname} />

      {children}
    </AccountLayoutStyled>
  )
}

export default LayoutAccount
