'use client'

import { Col, Layout, Row } from 'antd'
import React, { FC, ReactNode } from 'react'
import { CarouselIdentity } from './modules'
import { IdentityWarper } from './styles'

const IdentityLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Layout>
      <IdentityWarper>
        <Row className="w-full">
          <Col span={12}>
            <CarouselIdentity />
          </Col>
          <Col span={12}>{children}</Col>
        </Row>
      </IdentityWarper>
    </Layout>
  )
}

export default IdentityLayout
