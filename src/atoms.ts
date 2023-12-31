import { atom } from "recoil";

export const languageState = atom<boolean>({
  key: "isEng",
  default: false,
});

export const projectState = atom<IProjectDate[]>({
  key: "projectState",
  default: [
    {
      name: "",
      skill: [""],
      image: [""],
      demo: "",
      github: "",
      detail: "",
      detailKor: "",
      subtitle: "",
    },
  ],
});

export const blogState = atom<IBlogState[]>({
  key: "blogState",
  default: [
    {
      title: "",
      date: "",
      link: "",
      image: "",
    },
  ],
});

export const screenState = atom<number>({
  key: "screenWidth",
  default: 0,
});

interface IProjectDate {
  name: string;
  skill: string[];
  image: string[];
  demo: string;
  github: string;
  detail: string;
  detailKor: string;
  subtitle: string;
}

interface IBlogState {
  title: string;
  date: string;
  link: string;
  image: string;
}
