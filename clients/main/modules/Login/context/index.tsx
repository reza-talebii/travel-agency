'use client'

import { FC, createContext, useContext, ReactNode } from 'react'

interface IContextValue {
  states: {}
  handlers: {}
  requests: {}
}

export const LoginCtx = createContext<IContextValue | undefined>(undefined)

export const LoginProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const ctxValue: IContextValue = {
    states: {},
    handlers: {},
    requests: {},
  }
  return <LoginCtx.Provider value={ctxValue}>{children}</LoginCtx.Provider>
}

export const useLoginCtx = () => useContext(LoginCtx)!
