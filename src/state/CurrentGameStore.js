import { create } from "zustand";

export const useCurrentGameStore = create((set) => ({
  currentGame: {
    id: 0,
    dateSaved: "",
    lastPlayed: "",
    gameSettings: {},
    setupPrompts: {},
  },
  updateCurrentGame: (settings) =>
    set((state) => {
      state.currentGame = settings;
      return state;
    }),
}));
