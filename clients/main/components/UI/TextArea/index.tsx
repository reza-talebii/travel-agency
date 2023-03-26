'use client'

import { TextAreaProps } from 'antd/es/input/TextArea'
import React, { FC } from 'react'
import FormControlUiKit from '../FormControl'
import { TextAreaStyled } from './styled'

interface IProps extends TextAreaProps {
  label?: string
  height?: string
  value?: string
}

const TextAreaUiKit: FC<IProps> = ({ label, height = '65px', ...props }) => {
  return (
    <FormControlUiKit label={label} height={height}>
      <TextAreaStyled {...props} />
    </FormControlUiKit>
  )
}

export default TextAreaUiKit
