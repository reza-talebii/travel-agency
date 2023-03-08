import { Table } from 'antd'
import styled from 'styled-components'

export const TableUiStyled = styled.section`
  padding: 16px;
  width: 100%;
  height: auto;
  background: #23272e;
  border-radius: 16px;

  .ant-table-footer {
    background-color: transparent !important;
  }

  .ant-table-row-expand-icon {
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }

  .ant-pagination-item {
    background-color: transparent !important;
  }

  .ant-table-cell {
    text-align: center !important;
    border-top: none;
  }

  .ant-table-column-sort {
    background: transparent !important;
  }

  .ant-table-thead .ant-table-cell {
    background: transparent !important;
    border-bottom: none;
    padding: 10px;

    &::before {
      background-color: rgba(86, 87, 91, 0.2) !important;
    }
  }

  .ant-table-tbody {
    background: #171a1f;
    &::-webkit-scrollbar {
      width: 5px !important;
    }

    td {
      border-top: none !important;
      border-bottom: 1px solid rgba(86, 87, 91, 0.3) !important;
    }

    .ant-table-cell-row-hover {
      background: transparent !important;
      border-radius: 0 !important;
    }
  }

  .ant-pagination-options {
    margin-right: auto !important;
  }
`
