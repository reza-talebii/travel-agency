'use client'

import ButtonUi from '@/components/UI/Button'
import FormUi from '@/components/UI/Form'
import InputUi from '@/components/UI/Input'
import InputPassword from '@/components/UI/InputPassword'
import { emailValidator } from '@/helper'
import { ROUTES } from '@/models'
import { Checkbox, Col, Divider, Form, Row, Typography } from 'antd'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { WrapperLoginForm } from '../../styles'

const LoginForm = () => {
  const [loading, setLoading] = React.useState(false)

  const onLogin = (values: { email: string; password: string }) => {
    setLoading(true)

    signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: true,
      callbackUrl: ROUTES.account,
    }).finally(() => {
      setLoading(false)
    })
  }

  return (
    <WrapperLoginForm>
      <section>
        <Typography.Title level={3} className="title">
          Login
        </Typography.Title>
        <Typography.Text className="subTitle">Login to access your Golobe account</Typography.Text>
      </section>

      <FormUi onFinish={onLogin} className="flex flex-col gap-2">
        <Form.Item name={'email'} rules={[{ required: true }, emailValidator]}>
          <InputUi label="Email" placeholder="please enter your Email" />
        </Form.Item>
        <Form.Item name={'password'} rules={[{ required: true }, { min: 5, message: 'password must be more than 5 character ' }]}>
          <InputPassword label="Password" placeholder="please enter your Password" />
        </Form.Item>

        <Row justify={'space-between'}>
          <Col span={12}>
            <Form.Item noStyle name={'TermsPrivacy'} valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Link href={''} className="!text-[#FF8682] text-right block">
              Forgot Password
            </Link>
          </Col>
        </Row>

        <ButtonUi loading={loading} htmlType="submit" className="w-full h-[48px]">
          Login
        </ButtonUi>

        <Typography.Text className="text-center mt-1 block">
          Don’t have an account?
          <Link href={ROUTES.signUp} className="!text-[#FF8682] ml-2">
            Sign Up
          </Link>
        </Typography.Text>
      </FormUi>

      <Divider className="!my-0 ">Or Login with</Divider>
    </WrapperLoginForm>
  )
}

export default LoginForm
