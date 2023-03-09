'use client'

import { FC } from 'react'
import SignUpInfo from './modules/Info'
import { WrapperSignUp } from './styles'

const SignUp: FC = () => {
  return (
    <WrapperSignUp>
      <SignUpInfo />
    </WrapperSignUp>
  )
}

export default SignUp
