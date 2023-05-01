'use client'

import { GlobalStyle } from '@/styles/global.style'
import { antdThemeComponents, antdThemeToken } from '@/styles/theme'
import styledComponentsTheme from '@/styles/theme/styledComponent'
import { ConfigProvider } from 'antd'
import React, { FC, ReactNode, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import StyledComponentsRegistry from '@/lib/registry'

const ConfigProviders: FC<{ children: ReactNode }> = ({ children }) => {
  const antdTheme = {
    token: antdThemeToken,
    components: antdThemeComponents,
  }
  const [queryClient] = useState(() => new QueryClient())
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider theme={antdTheme}>
          <StyledComponentsRegistry>
            <ThemeProvider theme={styledComponentsTheme}>
              <GlobalStyle />
              {children}
            </ThemeProvider>
          </StyledComponentsRegistry>
        </ConfigProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default ConfigProviders
