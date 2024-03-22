import { atom } from "recoil";


export const recordPageStateAtom = atom({
    key: "recordPageStateAtom",
    default: "record",
});

export const momentPageStateAtom = atom({
    key: "momentPageStateAtom",
    default: "ai",
});