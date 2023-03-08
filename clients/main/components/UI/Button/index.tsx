import React, { FC, ReactNode } from "react";
import { ButtonUiStyled } from "./styles";
import { ButtonProps } from "antd/lib/button";

interface IProps extends ButtonProps {
  children?: ReactNode;
}

const ButtonUi: FC<IProps> = ({ children, ...props }) => {
  return (
    <ButtonUiStyled type="primary" {...props}>
      {children}
    </ButtonUiStyled>
  );
};

export default ButtonUi;
