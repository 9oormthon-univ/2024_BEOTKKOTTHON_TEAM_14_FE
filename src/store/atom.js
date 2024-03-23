import { atom } from "recoil";


export const recordPageStateAtom = atom({
    key: "recordPageStateAtom",
    default: "record",
});

export const momentPageStateAtom = atom({
    key: "momentPageStateAtom",
    default: "ai",
});

export const questionResultAtom = atom({
    key: "questionResultAtom",
    default: null,
});

export const testamentResultAtom = atom({
    key: "testamentResultAtom",
    default: null,
});

