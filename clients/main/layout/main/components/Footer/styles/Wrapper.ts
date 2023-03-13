import styled from 'styled-components'
import { Layout } from 'antd'

const { Footer } = Layout

export const FooterStyled = styled(Footer)`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fafbfc;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  min-height: 573px;
  filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.02));
`
