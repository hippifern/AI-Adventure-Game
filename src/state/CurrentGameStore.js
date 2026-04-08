import { create } from "zustand";

export const useCurrentGameStore = create((set) => ({
  currentGame: {
    id: 0,
    dateSaved: "",
    lastPlayed: "",
    gameSummary: "",
    gameSettings: {},
    setupPrompts: [],
  },
}));
