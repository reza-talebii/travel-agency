'use client'

import { useGetSession } from '@/hook'
import { ButtonUi } from 'golobe-ui'

export default function Home() {
  const { user, isLoading, isUnauthenticated } = useGetSession()

  console.log('user', user, 'isLoading', isLoading, 'isUnauthenticated', isUnauthenticated)

  return (
    <>
      <ButtonUi>click</ButtonUi>
    </>
  )
}
