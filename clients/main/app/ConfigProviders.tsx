'use client'

import { USER_JWT_TOKEN } from '@/constants'
import { axiosInstance } from '@/services/axiosInstance'
import useAuthStore from '@/store/auth'
import { GlobalStyle } from '@/styles/global.style'
import { antdThemeComponents, antdThemeToken } from '@/styles/theme'
import styledComponentsTheme from '@/styles/theme/styledComponent'
import { ConfigProvider } from 'antd'
import { useRouter } from 'next/router'
import React, { FC, ReactNode, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

const ConfigProviders: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter()
  const { login } = useAuthStore()

  useEffect(() => {
    if (!router.isReady) return
    const token = localStorage.getItem(USER_JWT_TOKEN)
    if (!token) return

    axiosInstance.defaults.headers.Authorization = `Bearer ${token}`
    login(token)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname])

  const antdTheme = {
    token: antdThemeToken,
    components: antdThemeComponents,
  }

  return (
    <ConfigProvider theme={antdTheme}>
      <ThemeProvider theme={styledComponentsTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ConfigProvider>
  )
}

export default ConfigProviders
