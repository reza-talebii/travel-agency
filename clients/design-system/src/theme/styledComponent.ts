import { DefaultTheme } from "styled-components";
const styledComponentsTheme: DefaultTheme = {
  colors: {
    primary: "#51c19a",
    secondary: "#23272E",
    darkGreen: "#202C2D",
    gray: "#4A4B4F",
    error: "#A61D24",
    warning: "#D89614",
    success: "#52C41A",
    disable: "#BFBFBF",
    border: "#D9D9D9",
    inputBorder: "#56575b",
    lightGreen: "#25E3BF",
    boxShadow: "rgba(0, 0, 0, 0.4)",
    danger: "#f04849",
    base: "#0B0E11",
    homePageBg:
      "linear-gradient(179deg,#1b3d22 0%,#010302 23.56%,#0E2312 116.83%)",
    text: {
      primary: "#F8F9FA",
      secondary: "#8C8C8C",
      link: "#177DDC",
      white: "#FFFFFF",
      gray: "#D3D3D3",
      warning: "#EC8A2A",
      disabled: "#949494",
    },
    components: {
      headerBg: "#1F222980",
      footerBg: "#171a1f",
    },
  },
  fontSizes: {
    small: "1rem",
    medium: "2em",
    large: "3em",
  },
  direction: "rtl",
  border: {
    color: "#56575B",
    width: "1px",
    style: "solid",
  },
  scroll: {
    scrollTrack: "#23272e",
    scrollHandle: "#25e3bf50",
    scrollHover: "#25e3bf30",
  },
};
export default styledComponentsTheme;
