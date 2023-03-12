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

  .title {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    font-family: cursive;

    color: #000000;
  }
  .subTitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #112211;
    opacity: 0.75;
  }

  .back {
    cursor: pointer;
    span {
      font-size: 14px;
      font-weight: 500;
    }
  }
`
