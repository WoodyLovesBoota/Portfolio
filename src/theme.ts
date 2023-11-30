import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  word: {
    main: "#232E35",
    sub: "#656D72",
    accent: "#775EEF",
    darker: "#EBEBFF",
    black: "#775EEF",
  },

  bg: {
    normal: "#ffffff",
    point: "#FBFBFB",
    lighter: "#ffffff4d",
    blur: "#41414133",
  },

  yellow: { accent: "#FFC107", normal: "#FAEB9B" },
  orange: { accent: "#FF7000", normal: "#F8D099" },
  blue: { accent: "#3081D0", normal: "#87CEFA", neon: "#5AE9F3" },
  red: { accent: "#D21312", normal: "#F7AEA6" },
  purple: { accent: "#C478E2", normal: "#E8BBF2" },
  green: { accent: "#7CC56E", normal: "#D0F0C1" },
  gray: { accent: "#767582", normal: "#D0F0C1" },

  main: {
    accent: "#775EEF",
    normal: "#af85d8",
    blur: "#e6cef8",
    bg: "#F4F4FA",
    hlbg: "#EBEBFF",
    word: "#0C0B31",
    point: "#5646C0",
  },
};

export const darkTheme: DefaultTheme = {
  word: {
    main: "#ffffff",
    sub: "#c0c0c0",
    accent: "#FFC107",
    darker: "#EBEBFF",
    black: "#ffffff",
  },

  bg: {
    normal: "#000000",
    point: "#FBFBFB",
    lighter: "#0000004d",
    blur: "#bebebe33",
  },

  yellow: { accent: "#FFC107", normal: "#FAEB9B" },
  orange: { accent: "#FF7000", normal: "#F8D099" },
  blue: { accent: "#3081D0", normal: "#87CEFA", neon: "#5AE9F3" },
  red: { accent: "#D21312", normal: "#F7AEA6" },
  purple: { accent: "#C478E2", normal: "#E8BBF2" },
  green: { accent: "#7CC56E", normal: "#D0F0C1" },
  gray: { accent: "#767582", normal: "#D0F0C1" },

  main: {
    accent: "#FFC107",
    normal: "#EBEBFF",
    blur: "#e6cef8",
    bg: "#F4F4FA",
    hlbg: "#FFC107",
    word: "#0C0B31",
    point: "#EBEBFF",
  },
};
