'use client'

import { Layout } from 'antd'
import React, { FC, ReactNode } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { MainLayoutStyled } from './styles'

const { Content } = Layout

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MainLayoutStyled>
      <Header />
      <Content className="content">{children}</Content>
      <Footer />
    </MainLayoutStyled>
  )
}

export default MainLayout
