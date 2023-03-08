import { FC } from "react";
import { SelectProps } from "antd";
import FormControlUiKit from "../FormControl";
import { SelectStyled } from "./style";
import { BaseOptionType, DefaultOptionType } from "antd/es/select";
import { FilterFunc } from "rc-select/lib/Select";

interface IProps extends SelectProps<any, any> {
  label?: string;
  filterOption?: boolean | FilterFunc<BaseOptionType | DefaultOptionType>;
  wrapperClassName?: string;
}

export const SelectUi: FC<IProps> = ({ label, wrapperClassName, ...props }) => {
  return (
    <FormControlUiKit label={label} className={wrapperClassName}>
      <SelectStyled {...props} />
    </FormControlUiKit>
  );
};
