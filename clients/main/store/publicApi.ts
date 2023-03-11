import { IResBalanceResult } from 'models/interfaces/IBalance'
import { IGetCurrencyResult } from 'services/controllers/Public/models/result.model'
import create from 'zustand'


interface IPublicStore {
    currency?: IGetCurrencyResult
    setCurrency: (currency: IGetCurrencyResult) => void
    lastLogin?: string
    setLastLogin: (lastLogin: string) => void
    userBalance?: IResBalanceResult[]
    setUserBalance: (userBalance: IResBalanceResult[]) => void
}

const usePublicStore = create<IPublicStore>(set => ({
    setCurrency: (currency) => set({currency}),
    setLastLogin: (lastLogin) => set({lastLogin}),
    setUserBalance: (userBalance) => set({userBalance}), 
}))



export default usePublicStore
