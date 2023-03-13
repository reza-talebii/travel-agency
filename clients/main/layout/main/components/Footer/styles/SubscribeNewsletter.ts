import { Row } from 'antd'
import styled from 'styled-components'

export const SubscribeNewsletterWrapper = styled(Row)`
  position: absolute;
  top: 0px;
  padding: 0px 24px;
  max-width: 1232px;
  width: 100%;
  min-height: 305px;
  background: #cdeae1;
  box-shadow: 0px 4px 16px rgba(17, 34, 17, 0.05);
  border-radius: 20px;

  .title {
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 54px;
    font-family: cursive;
  }

  .formCol {
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-evenly !important;
  }

  .brandName {
    display: block;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    color: #112211;
    opacity: 0.8;
  }

  .subtitle {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #112211;
    opacity: 0.7;
  }

  .btn {
    flex: 1;
    padding: 8px 16px;
    gap: 4px;
    max-width: 104px;
    height: 45px;
    background: #112211 !important;
    color: #fff !important;
  }
`
