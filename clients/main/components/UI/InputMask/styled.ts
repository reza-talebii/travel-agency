import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const InputUiMaskStyled = styled(InputMask)<{ haserror?: string }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 12px;
  gap: 8px;
  border: 1px solid ${props => props.theme.colors.border}30;
  border-radius: 8px;
  letter-spacing: 5px;
  text-align: left;
  transition: all 0.3s;
  &:focus-visible {
    outline: unset !important;
  }
  &:focus {
    border: 1px solid
      ${({ haserror, theme }) => {
        return haserror === 'true' ? theme.colors.danger : `none`
      }} !important;
    box-shadow: none;
  }
`
