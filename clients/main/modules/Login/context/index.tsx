import { ROUTES } from '@/models'
import { IdentityService } from '@/services/controllers/Identity/Identity.service'
import { IBodyLogin, IResponseAuth } from '@/services/controllers/Identity/models'
import useAuthStore from '@/store/auth'
import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
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
  const router = useRouter()
  const { login } = useAuthStore()
  const IdentityServices = new IdentityService()

  const loginReq = async (body: IBodyLogin) => {
    const res = await IdentityServices.login(body)
    return res.data
  }

  const loginController = useMutation(loginReq, {
    onSuccess: data => {
      login(data.token)
      router.push(ROUTES.home)
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
