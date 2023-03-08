import { AliasToken, OverrideToken } from "antd/es/theme/interface";

export const antdThemeToken: Partial<AliasToken> = {
  colorPrimary: "#51c19a",
  colorWarning: "#EC8A2A",
  colorError: "#FD736E",
  colorSuccess: "#49AA19",
  colorLink: "#177DDC",
  colorTextDisabled: "#BFBFBF",
  colorBgBase: "#F5F5F5",
  colorBorder: "#D9D9D9",
  colorText: "#112211",
};

export const antdThemeComponents: OverrideToken = {
  Button: {
    colorBgContainerDisabled: "#D2D1D3",
    colorTextDisabled: "#8F8C91",
  },
  Select: {
    colorBgContainer: "transparent",
  },
};
