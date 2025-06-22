import { create } from "zustand";

// Zustand global store
const useWordStore = create((set) => ({
  wordList: [],
  word: "",
  hint: "",

  setWordList: (list) =>
    set((state) => {
      return {
        ...state,
        wordList: list,
      };
    }),

  setWord: (newWordst) =>
    set((state) => {
      return {
        ...state,
        word: newWordst,
      };
    }),

  setHint: (newHint) =>
    set((state) => {
      return {
        ...state,
        hint: newHint,
      };
    }),
}));

export default useWordStore;
