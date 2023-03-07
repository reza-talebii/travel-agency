import { ConfigProvider } from "antd";
import { darkThemeComponents, darkThemeToken } from "./theme";

export function App() {
  const antdTheme = {
    token: darkThemeToken,
    components: darkThemeComponents,
  };

  return <ConfigProvider theme={antdTheme}></ConfigProvider>;
}
