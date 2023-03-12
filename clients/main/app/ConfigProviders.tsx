'use client'

import { USER_JWT_TOKEN } from '@/constants'
import { axiosInstance } from '@/services/axiosInstance'
import useAuthStore from '@/store/auth'
import { GlobalStyle } from '@/styles/global.style'
import { antdThemeComponents, antdThemeToken } from '@/styles/theme'
import styledComponentsTheme from '@/styles/theme/styledComponent'
import { ConfigProvider } from 'antd'
import React, { FC, ReactNode, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import mockRouter from 'next-router-mock'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useGetUserInfo } from '@/hook'

const ConfigProviders: FC<{ children: ReactNode }> = ({ children }) => {
  const { login, token } = useAuthStore()
  // const { GetUserInfoReq } = useGetUserInfo()

  useEffect(() => {
    if (!mockRouter.isReady) return
    const tokenLocalStorage = localStorage.getItem(USER_JWT_TOKEN)
    if (!tokenLocalStorage) return
    axiosInstance.defaults.headers.Authorization = `Bearer ${tokenLocalStorage}`
    login(tokenLocalStorage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mockRouter.pathname])

  // useEffect(() => {
  //   if (!mockRouter.isReady || !token) return
  //   axiosInstance.defaults.headers.Authorization = `Bearer ${token}`
  //   GetUserInfoReq()
  // }, [token, mockRouter.pathname])

  const antdTheme = {
    token: antdThemeToken,
    components: antdThemeComponents,
  }
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={antdTheme}>
        <ThemeProvider theme={styledComponentsTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </ConfigProvider>
    </QueryClientProvider>
  )
}

export default ConfigProviders
