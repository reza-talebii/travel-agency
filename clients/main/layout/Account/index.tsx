'use client'

import ImageUi from '@/components/UI/Image'
import React, { FC, ReactNode } from 'react'
import { AccountLayoutStyled } from './styles'
import cover from '@images/account/cover.svg'
import { Avatar, Typography } from 'antd'

const LayoutAccount: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AccountLayoutStyled>
      <section className="relative">
        <ImageUi src={cover} alt="cover" width="100%" height="350px" className="cover" />

        <section className="userInfo">
          <Avatar src={cover} className="avatar" />
          <Typography.Title className="title" level={5}>
            name
          </Typography.Title>
          <Typography.Text className="subtitle">lastName@gmail.com</Typography.Text>
        </section>
      </section>

      {children}
    </AccountLayoutStyled>
  )
}

export default LayoutAccount
