import { Input, InputProps } from "antd";
import React, { FC, ReactNode } from "react";
import FormControlUiKit from "../FormControl";
import { InputPasswordStyled } from "./styles";

interface IProps extends InputProps {
  label?: string;
}

const InputPassword: FC<IProps> = ({ label, ...props }) => {
  return (
    <FormControlUiKit label={label} height={"45px"}>
      <InputPasswordStyled {...props} />
    </FormControlUiKit>
  );
};

export default InputPassword;
