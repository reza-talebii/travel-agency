import React from 'react'
import { Checkbox, Divider, Form, Typography } from 'antd'
import WrapperSignUpInfo from './styles/Wrapper'
import InputUi from '@/components/UI/Input'
import FormUi from '@/components/UI/Form'
import InputPassword from '@/components/UI/InputPassword'
import ButtonUi from '@/components/UI/Button'
import Link from 'next/link'
import { emailValidator } from '@/helper'

interface IFormValues {
  TermsPrivacy: boolean
  confirmPassword: string
  emailOrPhone: string
  password: string
}

const SignUpInfo = () => {
  const onCreateAccount = (values: IFormValues) => {
    console.log(values)
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
        <Form.Item name={'email'} rules={[{ required: true }, emailValidator]}>
          <InputUi label="Email" />
        </Form.Item>
        <Form.Item name={'password'} rules={[{ required: true }]}>
          <InputPassword label="Password" />
        </Form.Item>
        <Form.Item name={'confirmPassword'} rules={[{ required: true }]}>
          <InputPassword label="Confirm Password" />
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
          <Link href={'/login'} className="!text-[#FF8682] ml-2">
            Login
          </Link>
        </Typography.Text>
      </FormUi>

      <Divider className="!my-0 ">Or Sign up with</Divider>
    </WrapperSignUpInfo>
  )
}

export default SignUpInfo
