import { UserSchema } from '@/models/schema'
import axios from 'axios'
import { AccountService } from 'services/controllers/Account/Account.service'
import useAuthStore from 'store/auth'
import { useLogout } from './auth/useLogOut'

export const useGetUserInfo = () => {
  const { logoutHandler } = useLogout()
  const services = new AccountService()
  const { setUserInfo } = useAuthStore()

  axios.interceptors.response.use(
    response => response,
    error => {
      const { status } = error.response
      if (status === 401) logoutHandler()
      return Promise.reject(error)
    },
  )

  const GetUserInfoReq = async () => {
    const res = await services.GetUserInfo()
    if (res?.status !== 200 || !UserSchema.safeParse(res.data).success) return
    setUserInfo(res.data)
  }

  return { GetUserInfoReq }
}
