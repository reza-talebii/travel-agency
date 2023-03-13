import { Menu } from 'antd'
import styled from 'styled-components'

export const MenuHeaderStyled = styled(Menu)`
  background: none;
  border: none;
  flex: 1;

  .ant-menu-item {
    font-weight: 600;
    font-size: 14px;
    color: #112211;

    &::after {
      bottom: -9px !important;
    }
  }
`
