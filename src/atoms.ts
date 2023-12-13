import { atom } from "recoil";

export const languageState = atom<boolean>({
  key: "isEng",
  default: false,
});

export const themeState = atom<boolean>({
  key: "isDark",
  default: false,
});

export const screenState = atom<number>({
  key: "screenWidth",
  default: 0,
});
