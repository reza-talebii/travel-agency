import { FC } from 'react'
import { SelectProps } from 'antd'
import FormControlUiKit from '../FormControl'
import { SelectStyled } from './style'
import { BaseOptionType, DefaultOptionType } from 'antd/es/select'
import { FilterFunc } from 'rc-select/lib/Select'

interface IProps extends SelectProps<any, any> {
  label?: string
  filterOption?: boolean | FilterFunc<BaseOptionType | DefaultOptionType>
  wrapperClassName?: string
}

export const SelectUi: FC<IProps> = ({
  label,
  wrapperClassName,
  filterOption = (input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase()),
  ...props
}) => {
  return (
    <FormControlUiKit label={label} height={'45px'} className={wrapperClassName}>
      <SelectStyled showSearch {...props} filterOption={filterOption} />
    </FormControlUiKit>
  )
}
