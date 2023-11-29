import { atom } from "recoil";

export const clickedProjectState = atom<IProject>({
  key: "clickedProject",
  default: { projectName: "", skill: [""], image: "", infoDesc: "", cardDesc: "" },
});

interface IProject {
  projectName: string;
  skill: string[];
  image: string;
  infoDesc: string;
  cardDesc: string;
}
