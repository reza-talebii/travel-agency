import { IUser } from '@/models'
import { create } from 'zustand'

interface IStore {
  token?: string
  userInfo?: IUser
  login: (token: string) => void
  setUserInfo: (user: IUser) => void
  logout: () => void
}

const useAuthStore = create<IStore>(set => ({
  login: token => set(() => ({ token: token })),
  setUserInfo: user => set(() => ({ userInfo: user })),
  logout: () => set({ token: undefined, userInfo: undefined }),
}))

export default useAuthStore
