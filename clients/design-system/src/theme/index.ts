import { AliasToken, OverrideToken } from "antd/es/theme/interface";

export const darkThemeToken: Partial<AliasToken> = {
  colorPrimary: "#26A69A",
  colorWarning: "#EC8A2A",
  colorError: "#F04849",
  colorSuccess: "#49AA19",
  colorLink: "#177DDC",
  colorTextDisabled: "#BFBFBF",
  colorBgBase: "#F5F5F5",
  colorBorder: "#D9D9D9",
  colorText: "#F8F9FA",
  colorTextBase: "#BFBFBF",
};

export const darkThemeComponents: OverrideToken = {
  Button: {
    colorBgContainer: "transparent",
    colorBorder: "#26A69A",
    colorPrimaryBg: "#26A69A",
  },
  Input: {
    colorText: "rgba(31, 34, 41, 0.9)",
  },
  Dropdown: {
    colorPrimaryBg: "rgba(31, 34, 41, 0.9)",
    colorBgBase: "rgba(31, 34, 41, 0.9)",
    colorBgElevated: "rgba(31, 34, 41, 0.9)",
    colorText: "#949494",
  },
  Select: {
    colorBgContainer: "transparent",
    colorBorder: "#56575B",
    colorBgElevated: "#2C303A",
    colorTextPlaceholder: "#949494",
    controlHeight: 45,
    borderRadius: 8,
    controlItemBgActive: "#353A46",
  },
  Drawer: {
    colorBgLayout: "#282B34",
    colorBgContainer: "#282B34",
    colorBgElevated: "#282B34",
    colorText: "#D3D3D3",
    colorTextBase: "#D3D3D3",
  },
  Menu: {
    colorItemBgActive: "#26A69A",
    colorText: "#D3D3D3",
    colorItemBgSelected: "#24E3BF1A",
    radiusItem: 2,
    colorItemTextSelected: "#25E3BF",
    colorItemText: "#D3D3D3",
    colorSubItemBg: "transparent",
  },
  Modal: {
    colorBgLayout: "#282B34",
    colorBgContainer: "#282B34",
    colorBgElevated: "#282B34",
    colorText: "#D3D3D3",
    colorTextBase: "#D3D3D3",
  },
  Table: {
    colorBgContainer: "transparent",
    colorText: "#949494",
    colorTextHeading: "#D3D3D3",
  },
  Radio: {
    colorBgContainer: "#56575B",
    colorBorder: "transparent",
  },
  DatePicker: {
    colorBgLayout: "#282B34",
    colorBgContainer: "#282B34",
    colorBgElevated: "#282B34",
  },
};
