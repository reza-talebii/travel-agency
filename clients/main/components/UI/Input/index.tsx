import { InputProps } from 'antd'
import React, { FC, ReactNode } from 'react'
import { InputUiKitContainer } from './styles/Container'
import FormControlUiKit from '../FormControl'

interface IProps extends InputProps {
  label?: string
  icon?: ReactNode
  wrapperClassName?: string
}

const InputUi: FC<IProps> = ({ label, icon, wrapperClassName, ...props }) => {
  return (
    <FormControlUiKit label={label} className={wrapperClassName} icon={icon}>
      <InputUiKitContainer {...props} />
    </FormControlUiKit>
  )
}

export default InputUi
