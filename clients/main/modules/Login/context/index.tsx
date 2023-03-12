import { useLogin } from '@/hook'
import { IdentityService } from '@/services/controllers/Identity/Identity.service'
import { IBodyLogin, IResponseAuth } from '@/services/controllers/Identity/models'
import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { FC, createContext, useContext, ReactNode } from 'react'

interface IContextValue {
  states: {}
  handlers: {}
  requests: {
    loginController: UseMutationResult<IResponseAuth, unknown, IBodyLogin, unknown>
  }
  dispatches: {}
}

export const LoginCtx = createContext<IContextValue | undefined>(undefined)

export const LoginProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { loginHandler } = useLogin()
  const IdentityServices = new IdentityService()

  const loginReq = async (body: IBodyLogin) => {
    const res = await IdentityServices.login(body)
    return res.data
  }

  const loginController = useMutation(loginReq, {
    onSuccess: data => {
      if (data) loginHandler(data.token)
    },
  })

  const ctxValue: IContextValue = {
    states: {},
    handlers: {},
    requests: {
      loginController,
    },
    dispatches: {},
  }
  return <LoginCtx.Provider value={ctxValue}>{children}</LoginCtx.Provider>
}

export const useLoginCtx = () => useContext(LoginCtx)!
