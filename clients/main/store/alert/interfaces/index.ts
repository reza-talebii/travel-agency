import { ReactNode } from 'react'

export interface IPublicAlert {
  title: string | ReactNode
}
export interface IPrivateAlert {
  title: string
  actionText: string
  href: string
  textIsDanger?: boolean
  btnError?: boolean
}
