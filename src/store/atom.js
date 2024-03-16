import { atom } from "recoil";

export const writePageStateAtom = atom({
    key: "writePageStateAtom",
    default: "write",
});

export const momentPageStateAtom = atom({
    key: "momentPageStateAtom",
    default: "moment",
});