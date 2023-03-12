import { Checkbox } from 'antd'
import styled from 'styled-components'

export const CheckBoxStyled = styled(Checkbox)`
  .ant-checkbox-inner {
    border: 1px solid ${props => props.theme.colors.primary};
  }
`
