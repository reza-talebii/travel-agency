import styled from 'styled-components'

export const CardNumberInputStyled = styled.section<{ hasError: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${props => (props.hasError ? props => props.theme.colors.danger : props => props.theme.colors.secondary)};
  height: 45px;
  border-radius: 4px;
  position: relative;

  input {
    height: 90%;
    border: 4px;
    width: 90%;
    text-align: left;
    text-align: left !important;
    border: none;
    outline: none;
    box-shadow: none;
    padding-left: 18px;
  }

  .label {
    position: absolute;
    top: -16px;
    right: 22px;
    padding: 0;
    background-color: #fff;
  }

  .ant-input-affix-wrapper > input.ant-input:focus {
    -webkit-box-shadow: unset !important;
  }

  .ant-input,
  .ant-input:focus {
    -webkit-box-shadow: unset !important;
  }

  input:not(:focus) {
    letter-spacing: unset !important;
  }

  input {
    letter-spacing: 2px !important;
  }

  .bankLogo {
    margin-right: 10px;
  }
`
