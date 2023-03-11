import { USER_JWT_TOKEN } from '@/constants'
import { ROUTES } from '@/models'
import { useRouter } from 'next/navigation'
import useAuthStore from 'store/auth'

export const useLogin = () => {
  const router = useRouter()
  const { login } = useAuthStore()

  const loginHandler = async (token: string) => {
    login(token)
    localStorage.setItem(USER_JWT_TOKEN, token)
    router.push(ROUTES.account)
  }

  return { loginHandler }
}
