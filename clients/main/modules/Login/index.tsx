'use client'
import { LoginProvider } from './context'
import LoginForm from './modules/Form'
import { WrapperLogin } from './styles'

const Login = () => {
  return (
    <WrapperLogin>
      <LoginProvider>
        <LoginForm />
      </LoginProvider>
    </WrapperLogin>
  )
}

export default Login
