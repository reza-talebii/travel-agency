import ImageUi from '@/components/UI/Image'
import React, { FC } from 'react'
import { HeaderWrapper } from './styles/Wrapper'
import logo from '@/public/assets/images/common/logo.svg'
import AuthButtons from './components/AuthBtns'
import TypeTravelHeader from './components/TypeTravelTab'
import LoggedInHeader from './components/LoggedInHeader'
import Link from 'next/link'
import { ROUTES } from '@/models'
import { useGetSession } from '@/hook'

const Header = () => {
  const { isLoading, isAuthenticated } = useGetSession()

  const AuthHeader: FC = () => {
    if (isLoading) {
      return <></>
    }
    return isAuthenticated ? <LoggedInHeader /> : <AuthButtons />
  }

  return (
    <HeaderWrapper>
      <TypeTravelHeader />
      <Link href={ROUTES.home}>
        <ImageUi src={logo} alt="logo" width="110.35px" height="36px" />
      </Link>
      <AuthHeader />
    </HeaderWrapper>
  )
}

export default Header
