import { useState } from "react";
import ButtonUi from "./components/Button";
import { ConfigProvider } from "antd";
import { antdThemeComponents, antdThemeToken } from "./theme";
import { ThemeProvider } from "styled-components";
import styledComponentsTheme from "./theme/styledComponent";

import { SelectUi } from "./components/select";

function App() {
  return (
    <ConfigProvider
      theme={{ components: antdThemeComponents, token: antdThemeToken }}
      direction="ltr"
    >
      <ThemeProvider theme={styledComponentsTheme}>
        <SelectUi label="Email" />
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
