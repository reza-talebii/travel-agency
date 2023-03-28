import { Input } from 'antd'
import styled from 'styled-components'

export const InputUiKitContainer = styled(Input)`
  border-radius: 4px 4px 0px 0px;
  font: inherit;
  letter-spacing: inherit;
  padding: 4px 0 5px;
  border: 0;
  background: none;
  margin: 0;
  min-width: 0;
  width: 100%;
  height: 100%;
  padding: 16.5px 14px;

  &:focus {
    border-inline-end-width: 0;
    box-shadow: none !important;
  }
`
