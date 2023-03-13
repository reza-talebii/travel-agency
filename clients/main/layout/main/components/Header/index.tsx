import ImageUi from '@/components/UI/Image'
import React from 'react'
import { HeaderWrapper } from './styles/Wrapper'
import logo from '@/public/assets/images/common/logo.svg'
import AuthButtons from './components/AuthBtns'
import TypeTravelHeader from './components/TypeTravelTab'
import useAuthStore from '@/store/auth'
import LoggedInHeader from './components/LoggedInHeader'

const Header = () => {
  const { token } = useAuthStore()

  return (
    <HeaderWrapper>
      <TypeTravelHeader />
      <ImageUi src={logo} alt="logo" width="110.35px" height="36px" />
      {token ? <LoggedInHeader /> : <AuthButtons />}
    </HeaderWrapper>
  )
}

export default Header
