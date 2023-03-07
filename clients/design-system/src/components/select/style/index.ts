import { Select } from "antd";
import styled from "styled-components";

export const SelectStyled = styled(Select)`
  width: 100%;
  border: none !important;
  box-shadow: none !important;
  background: transparent !important;

  .ant-select-arrow {
    color: #1c1b1f;
  }

  .ant-select-focused .ant-select-selector,
  .ant-select-selector:focus,
  .ant-select-selector:active,
  .ant-select-open .ant-select-selector {
    border: none !important;
    box-shadow: none !important;
    background: transparent !important;
  }
`;
