'use client'
import { FC } from 'react'
import { SignUpProvider } from './context'
import SignUpInfo from './modules/Info'
import { WrapperSignUp } from './styles'

const SignUp: FC = () => {
  return (
    <WrapperSignUp>
      <SignUpProvider>
        <SignUpInfo />
      </SignUpProvider>
    </WrapperSignUp>
  )
}

export default SignUp
