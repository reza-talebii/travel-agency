'use client'

import ButtonUi from '@/components/UI/Button'
import FormUi from '@/components/UI/Form'
import InputUi from '@/components/UI/Input'
import { emailValidator } from '@/helper'
import { ROUTES } from '@/models'
import { LeftOutlined } from '@ant-design/icons'
import { Divider, Form, Space, Typography } from 'antd'
import { useRouter } from 'next/navigation'
import { WrapperForgetPassword } from './styles'

const ForgetPassword = () => {
  const router = useRouter()
  const onSubmit = () => {}

  return (
    <WrapperForgetPassword>
      <Space onClick={() => router.push(ROUTES.login)} className="back" size={5}>
        <LeftOutlined />
        <span>Back to Login</span>
      </Space>
      <section>
        <Typography.Title level={3} className="title">
          Forgot your password?
        </Typography.Title>
        <Typography.Text className="subTitle">
          Don’t worry, happens to all of us. Enter your email below to recover your password.
        </Typography.Text>
      </section>

      <FormUi onFinish={onSubmit} className="flex flex-col gap-2">
        <Form.Item name={'email'} rules={[{ required: true }, emailValidator]}>
          <InputUi label="Email" placeholder="please enter your Email" />
        </Form.Item>
        <ButtonUi loading={false} htmlType="submit" className="w-full h-[48px]">
          Submit
        </ButtonUi>
      </FormUi>

      <Divider className="!my-3 ">Or Login with</Divider>
    </WrapperForgetPassword>
  )
}

export default ForgetPassword
