import { Form } from "antd";
import styled from "styled-components";

export const FormUiKitStyled = styled(Form)`
  width: 100%;
  height: 100%;

  .ant-form-item-explain-warning {
    font-size: 12px;
  }

  .ant-form-item-label label {
    color: ${(props) => props.theme.colors.disable};
  }
`;
