'use client'

import ButtonUi from '@/components/UI/Button'
import FormUi from '@/components/UI/Form'
import InputUi from '@/components/UI/Input'
import { IUser } from '@/models'
import { Col, Form, Row, Typography } from 'antd'
import React, { FC, useEffect } from 'react'
import { InformationWrapper } from './styles'

const Information: FC<{ userInfo: IUser }> = ({ userInfo }) => {
  const [formControl] = Form.useForm()

  useEffect(() => {
    formControl.setFieldsValue({
      ...userInfo,
    })
  }, [])

  return (
    <InformationWrapper>
      <Typography.Title level={5}>Information</Typography.Title>

      <FormUi form={formControl}>
        <Row gutter={[16, 16]}>
          <Col span={24} md={12}>
            <Form.Item name="firstName" rules={[{ required: true }]}>
              <InputUi label="FirstName" />
            </Form.Item>
          </Col>

          <Col span={24} md={12}>
            <Form.Item name="lastName" rules={[{ required: true }]}>
              <InputUi label="LastName" />
            </Form.Item>
          </Col>

          <Col span={24} md={12}>
            <Form.Item name="email" rules={[{ required: true }]}>
              <InputUi label="Email" disabled />
            </Form.Item>
          </Col>

          <Col span={24} md={12}>
            <Form.Item name="address" rules={[{ required: true }]}>
              <InputUi label="Address" />
            </Form.Item>
          </Col>

          <Col span={24}>
            <ButtonUi type="primary" htmlType="submit" className="btn">
              save
            </ButtonUi>
          </Col>
        </Row>
      </FormUi>
    </InformationWrapper>
  )
}

export default Information
