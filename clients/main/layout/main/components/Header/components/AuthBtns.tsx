import ButtonUi from '@/components/UI/Button'
import { ROUTES } from '@/models'
import { Space } from 'antd'
import Link from 'next/link'
import React from 'react'

const AuthButtons = () => {
  return (
    <Space size={3} className="flex-1 justify-end">
      <Link href={ROUTES.login}>
        <ButtonUi type="text">Login</ButtonUi>
      </Link>
      <Link href={ROUTES.signUp}>
        <ButtonUi type="text" className="!bg-[#112211] !text-white">
          Sign up
        </ButtonUi>
      </Link>
    </Space>
  )
}

export default AuthButtons
