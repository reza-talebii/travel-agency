import { Checkbox, CheckboxProps } from "antd";
import React, { FC, ReactNode } from "react";

interface IProps extends CheckboxProps {
  children?: ReactNode;
}

const CheckboxUi: FC<IProps> = ({ children, ...props }) => {
  return <Checkbox {...props}>{children}</Checkbox>;
};

export default CheckboxUi;
