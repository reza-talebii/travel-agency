'use client'

import ImageUi from '@/components/UI/Image'
import { USER_JWT_TOKEN } from '@/constants'
import { Col, Layout, Row } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { FC, ReactNode, useEffect } from 'react'
import { CarouselIdentity } from './modules'
import { IdentityWarper } from './styles'

const IdentityLayout: FC<{ children: ReactNode }> = ({ children }) => {
 

  return (
    <Layout>
      <IdentityWarper>
        <Row className="w-full" gutter={[16, 0]} justify="space-between">
          <Col span={24} md={12} className="content">
            <ImageUi className="mb-6" src="/assets/images/common/logo.svg" width={'110px'} height={'36px'} alt="logo" />
            {children}
          </Col>
          <Col span={0} md={10}>
            <CarouselIdentity />
          </Col>
        </Row>
      </IdentityWarper>
    </Layout>
  )
}

export default IdentityLayout
