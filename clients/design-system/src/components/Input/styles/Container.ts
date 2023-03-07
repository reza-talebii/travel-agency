import { Input } from 'antd'
import styled from 'styled-components'

export const InputUiKitContainer = styled(Input)`
  color: rgb(211 211 211);
  font: inherit;
  letter-spacing: inherit;
  padding: 4px 0 5px;
  border: 0;
  background: none;
  height: 1.4375em;
  margin: 0;
  display: block;
  min-width: 0;
  width: 100%;
  padding: 16.5px 14px;

  &:focus {
    border-inline-end-width: 0;
    box-shadow: none !important;
  }
`
