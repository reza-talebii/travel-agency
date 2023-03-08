'use client'

import { GlobalStyle } from '@/styles/global.style'
import { antdThemeComponents, antdThemeToken } from '@/styles/theme'
import styledComponentsTheme from '@/styles/theme/styledComponent'
import { ConfigProvider } from 'antd'
import React, { FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

const ConfigProviders: FC<{ children: ReactNode }> = ({ children }) => {
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
