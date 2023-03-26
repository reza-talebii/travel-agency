'use client'

import React, { FC, ReactNode } from 'react'
import { FormUiKitStyled } from './styles'
import { FormProps } from 'antd'

interface IProps extends FormProps {
  children?: ReactNode
}

const FormUi: FC<IProps> = ({ children, ...props }) => {
  return (
    <FormUiKitStyled scrollToFirstError {...props}>
      {children}
    </FormUiKitStyled>
  )
}

export default FormUi
