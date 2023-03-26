'use client'

import React, { FC } from 'react'
import { Props as inputProps } from 'react-input-mask'
import FormControlUiKit from '../FormControl'
import { InputUiMaskStyled } from './styled'

interface IProps extends Omit<inputProps, 'mask'> {
  mask?: string
  haserror?: boolean
  value?: string
  label?: string
}

const InputMuskUi: FC<IProps> = ({ mask = '9 9 9 9 9 9', haserror, label, ...props }) => {
  return (
    <FormControlUiKit label={label} childrenContainerClassName="!border-bone">
      <InputUiMaskStyled mask={mask} alwaysShowMask {...props} haserror={haserror?.toString()} />
    </FormControlUiKit>
  )
}

export default InputMuskUi
