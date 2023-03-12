'use client'
import React from 'react'
import ButtonUi from '@/components/UI/Button'
import FormUi from '@/components/UI/Form'
import InputPassword from '@/components/UI/InputPassword'
import { passwordConfirmValidator } from '@/helper'
import { Form, Typography } from 'antd'
import { WrapperSetPassword } from './styles'

const SetPassword = () => {
  const onSetPassword = () => {}

  return (
    <WrapperSetPassword>
      <section>
        <Typography.Title level={3} className="title">
          Set a password
        </Typography.Title>
        <Typography.Text className="subTitle">
          Your previous password has been reseted. Please set a new password for your account.
        </Typography.Text>
      </section>

      <FormUi onFinish={onSetPassword} className="flex flex-col gap-2">
        <Form.Item name={'password'} rules={[{ required: true }, { min: 5, message: 'password must be more than 5 character ' }]}>
          <InputPassword label="Create Password" placeholder="please enter your Create Password" />
        </Form.Item>
        <Form.Item name={'ConfirmPassword'} rules={[{ required: true }, passwordConfirmValidator]}>
          <InputPassword label="Re-enter Password" placeholder="please enter your Re-enter Password" />
        </Form.Item>

        <ButtonUi loading={false} htmlType="submit" className="w-full h-[48px]">
          Login
        </ButtonUi>
      </FormUi>
    </WrapperSetPassword>
  )
}

export default SetPassword
