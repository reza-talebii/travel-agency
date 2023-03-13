import { Col, Form, Typography } from 'antd'
import React from 'react'
import { SubscribeNewsletterWrapper } from '../styles/SubscribeNewsletter'
import postImage from '@/public/assets/images/landing/post.svg'
import ImageUi from '@/components/UI/Image'
import InputUi from '@/components/UI/Input'
import FormUi from '@/components/UI/Form'
import { emailValidator } from '@/helper'
import ButtonUi from '@/components/UI/Button'

const SubscribeNewsletter = () => {
  return (
    <SubscribeNewsletterWrapper>
      <Col md={14} span={24} className={'formCol'}>
        <Typography.Title className="title" level={5}>
          Subscribe Newsletter
        </Typography.Title>
        <Typography.Text className="brandName">The Travel</Typography.Text>
        <Typography.Text className="subtitle">Get inspired! Receive travel discounts, tips and behind the scenes stories.</Typography.Text>
        <Form className="flex justify-between  gap-2 mt-4">
          <Form.Item className="flex-3 w-full" name={'email'} rules={[{ required: true }, emailValidator]}>
            <InputUi placeholder="Your email address" wrapperClassName="bg-white" />
          </Form.Item>

          <ButtonUi htmlType="submit" type="text" className="btn">
            Subscribe
          </ButtonUi>
        </Form>
      </Col>
      <Col md={10} span={0}>
        <ImageUi src={postImage} alt={'news later'} width="90%" height="100%" className="!ml-auto" />
      </Col>
    </SubscribeNewsletterWrapper>
  )
}

export default SubscribeNewsletter
