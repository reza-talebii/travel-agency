import { USER_JWT_TOKEN } from 'constants/localStorage'
import { ROUTES } from 'models/enums'
import { useRouter } from 'next/router'
import useAuthStore from 'store/auth'

export const useLogin = () => {
  const router = useRouter()
  const { login } = useAuthStore()

  const loginHandler = async (token: string) => {
    login(token)
    localStorage.setItem(USER_JWT_TOKEN, token)
    router.push(ROUTES.userPanel)
  }

  return { loginHandler }
}
