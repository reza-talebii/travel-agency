import { Result, Space } from "antd";
import React, { FC } from "react";
import ButtonUiKit from "../components/Button";

interface IProps {
  title: string;
  subTitle: string;
  tyAgainHandler: () => void;
}

const ErrorResult: FC<IProps> = ({ subTitle, title, tyAgainHandler }) => {
  return (
    <Result
      status="error"
      title={title}
      subTitle={subTitle}
      extra={[
        <Space size={10} key="tryAgain">
          <ButtonUiKit type="primary" onClick={tyAgainHandler}>
            try again
          </ButtonUiKit>
        </Space>,
      ]}
    />
  );
};

export default ErrorResult;
