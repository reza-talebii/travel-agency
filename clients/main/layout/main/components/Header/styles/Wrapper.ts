import { Layout } from 'antd'
import styled from 'styled-components'

const { Header } = Layout

export const HeaderWrapper = styled(Header)`
  position: sticky;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 21px 104px;
  isolation: isolate;
  width: 100%;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(17, 34, 17, 0.05);
`
