import create from 'zustand'
import { IPrivateAlert, IPublicAlert } from './interfaces'

interface IStore {
  publicAlert?: IPublicAlert
  setPublicAlert: (alert?: IPublicAlert) => void
  privateAlert?: IPrivateAlert
  setPrivateAlert: (alert?: IPrivateAlert) => void
}

const useAlertStore = create<IStore>(set => ({
  setPublicAlert: (publicAlert?: IPublicAlert) => set(() => ({ publicAlert })),
  setPrivateAlert: (privateAlert?: IPrivateAlert) => set(() => ({ privateAlert })),
}))

export default useAlertStore
