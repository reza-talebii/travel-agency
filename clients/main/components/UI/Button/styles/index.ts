import { Button } from "antd";
import styled from "styled-components";

export const ButtonUiStyled = styled(Button)`
  &.ant-btn-default {
    border-color: ${(props) => props.theme.colors.primary} !important;
    background: transparent;
  }
`;
