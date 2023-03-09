'use client'

import ImageUi from '@/components/UI/Image'
import { Col, Layout, Row } from 'antd'
import Image from 'next/image'
import React, { FC, ReactNode } from 'react'
import { CarouselIdentity } from './modules'
import { IdentityWarper } from './styles'

const IdentityLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Layout>
      <IdentityWarper>
        <Row className="w-full" gutter={[16, 0]}>
          <Col span={24} md={12}>
            <ImageUi className="mb-6" src="/assets/images/common/logo.svg" width={110} height={36} alt="logo" />
            {children}
          </Col>
          <Col span={0} md={12}>
            <CarouselIdentity />
          </Col>
        </Row>
      </IdentityWarper>
    </Layout>
  )
}

export default IdentityLayout
