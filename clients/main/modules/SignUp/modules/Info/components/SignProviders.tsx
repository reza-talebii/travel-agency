import React from 'react'
import { Col } from 'antd'
import { GoogleOutlined, GithubOutlined, FacebookOutlined } from '@ant-design/icons'
import { SignUpProvidersWrapper } from '../styles'

const SignUpProviders = () => {
  return (
    <SignUpProvidersWrapper gutter={[17, 12]}>
      <Col md={12} span={24}>
        <GoogleOutlined />
      </Col>
      <Col md={12} span={24}>
        <GithubOutlined />
      </Col>
    </SignUpProvidersWrapper>
  )
}

export default SignUpProviders
