import React from 'react'
import { Checkbox, Col, Divider, Form, Row, Typography } from 'antd'
import WrapperSignUpInfo from './styles/Wrapper'
import InputUi from '@/components/UI/Input'
import FormUi from '@/components/UI/Form'
import InputPassword from '@/components/UI/InputPassword'
import ButtonUi from '@/components/UI/Button'
import Link from 'next/link'
import { emailValidator, passwordConfirmValidator } from '@/helper'
import { useSignUpCtx } from '../../context'
import _ from 'lodash'
import { ROUTES } from '@/models'
import AuthProvider from '@/components/AuthProvider'

interface IFormValues {
  TermsPrivacy: boolean
  confirmPassword: string
  email: string
  password: string
  firstName: string
  lastName: string
}

const SignUpInfo = () => {
  // const { registerController } = useSignUpCtx()

  const onCreateAccount = (values: IFormValues) => {
    const formatData = _.omit(values, 'TermsPrivacy', 'confirmPassword')
    // registerController.mutate(formatData)
  }

  return (
    <WrapperSignUpInfo>
      <section>
        <Typography.Title level={3} className="title">
          Sign up
        </Typography.Title>
        <Typography.Text className="subTitle">Let’s get you all st up so you can access your personal account.</Typography.Text>
      </section>

      <FormUi onFinish={onCreateAccount} className="flex flex-col gap-2">
        <Row gutter={[16, 16]}>
          <Col span={24} md={12}>
            <Form.Item name={'firstName'} rules={[{ required: true }]}>
              <InputUi label="FirstName" placeholder="please enter your firstName" />
            </Form.Item>
          </Col>
          <Col span={24} md={12}>
            <Form.Item name={'lastName'} rules={[{ required: true }]}>
              <InputUi label="LastName" placeholder="please enter your lastName" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item name={'email'} rules={[{ required: true }, emailValidator]}>
          <InputUi label="Email" placeholder="please enter your Email" />
        </Form.Item>
        <Form.Item name={'password'} rules={[{ required: true }, { min: 5, message: 'password must be more than 5 character ' }]}>
          <InputPassword label="Password" placeholder="please enter your password" />
        </Form.Item>
        <Form.Item name={'confirmPassword'} rules={[{ required: true }, passwordConfirmValidator]}>
          <InputPassword placeholder="please enter  confirmPassword" label="Confirm Password" />
        </Form.Item>

        <Form.Item name={'TermsPrivacy'} rules={[{ required: true }]} valuePropName="checked">
          <Checkbox>
            I agree to all the <span className="!text-[#FF8682]">Terms</span> and <span className="!text-[#FF8682] ">Privacy Policies</span>
          </Checkbox>
        </Form.Item>

        <ButtonUi htmlType="submit" className="w-full h-[48px]">
          Create account
        </ButtonUi>

        <Typography.Text className="text-center mt-1 block">
          Already have an account?
          <Link href={ROUTES.login} className="!text-[#FF8682] ml-2">
            Login
          </Link>
        </Typography.Text>
      </FormUi>

      <Divider className="!my-0 ">Or Sign up with</Divider>
      <AuthProvider />
    </WrapperSignUpInfo>
  )
}

export default SignUpInfo
