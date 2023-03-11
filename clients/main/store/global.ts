import create from 'zustand'

interface IStore {
  loading: boolean
}

const useGlobalStore = create<IStore>(set => ({
  loading: false,
}))

export default useGlobalStore
