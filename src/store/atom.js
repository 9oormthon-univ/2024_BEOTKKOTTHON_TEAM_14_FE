import { atom } from "recoil";

export const writePageStateAtom = atom({
    key: "writePageStateAtom",
    default: "write",
});