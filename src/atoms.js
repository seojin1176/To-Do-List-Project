// atoms.js 파일 생성
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const inputValuesState = atom({
  key: "inputValuesState",
  default: "",
});

export const comentValuesState = atom({
  key: "comentValuesState",
  default: "",
});

export const todoListState = atom({
  key: "todoListState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const modalState = atom({
  key: "modalState",
  default: false,
});
