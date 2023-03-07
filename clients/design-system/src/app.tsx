import { useState } from "react";
import ButtonUi from "./components/Button";
import { ConfigProvider } from "antd";
import { antdThemeComponents, antdThemeToken } from "./theme";
import { ThemeProvider } from "styled-components";
import styledComponentsTheme from "./theme/styledComponent";
import { StepBackwardOutlined } from "@ant-design/icons";

function App() {
  //
  return (
    <ConfigProvider
      theme={{ components: antdThemeComponents, token: antdThemeToken }}
    >
      <ThemeProvider theme={styledComponentsTheme}>
        <ButtonUi icon={<StepBackwardOutlined />} type="primary">
          Button
        </ButtonUi>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
