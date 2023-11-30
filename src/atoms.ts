import { atom } from "recoil";

export const languageState = atom<boolean>({
  key: "isEng",
  default: true,
});

export const themeState = atom<boolean>({
  key: "isDark",
  default: false,
});
