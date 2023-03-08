// styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      darkGreen: string
      gray: string
      error: string
      warning: string
      success: string
      disable: string
      border: string
      inputBorder: string
      boxShadow: string
      lightGreen: string
      danger: string

      text: {
        primary: string
        secondary: string
        link: string
        white: string
        gray: string
        warning: string
        disabled: string
      }
      components: {
        headerBg: string
        footerBg: string
      }
    }

    fontSizes?: {
      small: string
      medium: string
      large: string
    }
    direction: 'rtl' | 'ltr'
    border: {
      color: string
      width: string
      style: string
    }
    scroll: {
      scrollTrack: string
      scrollHandle: string
      scrollHover: string
    }
  }
}
