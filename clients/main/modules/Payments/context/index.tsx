import { FC, createContext, useContext, ReactNode } from "react";

interface IContextValue {
  states: {};
  handlers: {};
  requests: {};
  dispatches: {};
}

export const PaymentsCtx = createContext<IContextValue | undefined>(undefined);

export const PaymentsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const ctxValue: IContextValue = {
    states: {},
    handlers: {},
    requests: {},
    dispatches: {},
  };
  return <PaymentsCtx.Provider value={ctxValue}>{children}</PaymentsCtx.Provider>;
};

export const usePaymentsCtx = () => useContext(PaymentsCtx)!;
