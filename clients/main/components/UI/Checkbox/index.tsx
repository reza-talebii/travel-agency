'use client'

import { Checkbox, CheckboxProps } from 'antd'
import React, { FC, ReactNode } from 'react'
import { CheckBoxStyled } from './style'

interface IProps extends CheckboxProps {
  children?: ReactNode
}

const CheckboxUi: FC<IProps> = ({ children, ...props }) => {
  return <CheckBoxStyled {...props}>{children}</CheckBoxStyled>
}

export default CheckboxUi
