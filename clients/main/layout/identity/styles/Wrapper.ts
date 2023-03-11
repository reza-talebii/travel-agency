import styled from 'styled-components'

import { Layout } from 'antd'
const { Content } = Layout

export const IdentityWarper = styled(Content)`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background: #fff;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`
