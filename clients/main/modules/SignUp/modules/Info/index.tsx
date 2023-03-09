import React from 'react'
import { Button, Checkbox, Divider, Form, Row, Space, Typography } from 'antd'
import WrapperSignUpInfo from './styles/Wrapper'
import InputUi from '@/components/UI/Input'
import FormUi from '@/components/UI/Form'
import InputPassword from '@/components/UI/InputPassword'
import ButtonUi from '@/components/UI/Button'
import Link from 'next/link'
import SignUpProviders from './components/SignProviders'

const SignUpInfo = () => {
  return (
    <WrapperSignUpInfo>
      <section>
        <Typography.Title level={3} className="title">
          Sign up
        </Typography.Title>
        <Typography.Text className="subTitle">Let’s get you all st up so you can access your personal account.</Typography.Text>
      </section>

      <FormUi>
        <Form.Item name={'emailOrPhone'}>
          <InputUi label="Email/Phone" />
        </Form.Item>
        <Form.Item name={'password'}>
          <InputPassword label="Password" />
        </Form.Item>
        <Form.Item name={'confirmPassword'}>
          <InputPassword label="Confirm Password" />
        </Form.Item>

        <Form.Item name={'TermsPrivacy'}>
          <Checkbox>I agree to all the Terms and Privacy Policies</Checkbox>
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
      <SignUpProviders />
    </WrapperSignUpInfo>
  )
}

export default SignUpInfo
