import { Input } from 'antd'
import styled from 'styled-components'

const { TextArea } = Input

export const TextAreaStyled = styled(TextArea)`
  color: rgb(211 211 211);
  font: inherit;
  letter-spacing: inherit;
  padding: 4px 0 5px;
  border: 0;
  box-sizing: content-box;
  background: none;
  height: 1.4375em;
  margin: 0;
  display: block;
  width: 98%;
  padding: 16.5px 14px;
  resize: none !important;
  text-align: right;
  height: 100% !important;
  direction: rtl;
  padding-top: 0 !important;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0;

  &:focus {
    box-shadow: none;
  }

  .ant-form-item-explain-error {
    text-align: right !important;
  }
`
