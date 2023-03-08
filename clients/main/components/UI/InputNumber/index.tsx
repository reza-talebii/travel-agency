import React, { FC } from 'react'
import FormControlUiKit from '../FormControl'
import { InputNumber, InputNumberProps } from 'antd'

interface IProps extends InputNumberProps {
  label?: string
}

const InputNumberUi: FC<IProps> = ({ label, ...props }) => {
  return (
    <FormControlUiKit label={label} height="45px">
      <InputNumber
        className="w-full"
        controls={false}
        bordered={false}
        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value!.replace(/\$\s?|(,*)/g, '')}
        onKeyPress={event => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault()
          }
        }}
        {...props}
      />
    </FormControlUiKit>
  )
}

export default InputNumberUi
