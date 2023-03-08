import { Tabs } from 'antd'
import styled from 'styled-components'

export const TabsContainer = styled(Tabs)`
  .ant-tabs-nav:before {
    border-color: ${props => props.theme.colors.border}30;
  }
  .ant-tabs-tab:not(.ant-tabs-tab-active) {
    color: ${props => props.theme.colors.text.disabled};
  }
  .ant-tabs-tab-active {
    .ant-tabs-tab-btn {
      color: ${props => props.theme.colors.lightGreen} !important;
    }
  }
`
