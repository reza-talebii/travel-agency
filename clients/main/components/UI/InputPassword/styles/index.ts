import { Input } from 'antd'
import styled from 'styled-components'

export const InputPasswordStyled = styled(Input.Password)`
  box-sizing: content-box;
  background: none;
  border: none !important;

  .ant-input {
    font: inherit;
    letter-spacing: inherit;
    padding: 4px 0 5px;
    border: none !important;
    box-sizing: content-box;
    background: none;
    height: 1.4375em;
    margin: 0;
    display: block;
    min-width: 0;
    width: 100%;
    padding: 16.5px 14px;

    .ant-input-suffix {
      font-size: 16px;
    }

    .ant-input-password-icon {
      color: ${props => props.theme.colors.secondary};
    }

    &:focus {
      border-inline-end-width: 0;
      box-shadow: none !important;
    }
  }

  &:focus,
  &:hover {
    border: none !important;
    box-shadow: none !important;
    outline: unset !important;
  }
  &:focus-visible {
    outline: unset !important;
  }
  .ant-input-affix-wrapper-focused {
    border: none !important;
    box-shadow: none !important;
    display: none;
  }
`
