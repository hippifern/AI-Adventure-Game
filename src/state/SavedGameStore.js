import { create } from "zustand";

export const useSavedGameStore = create((set) => ({
  savedGames: [
    {
      id: 0,
      title: "Saved Game 1",
      dateSaved: "2-3-2026",
      lastPlayed: "6-3-2026",
      gameSummary: "",
      gameSettings: {},
      setupPrompts: [],
    },
    {
      id: 1,
      title: "Saved Game 2",
      dateSaved: "20-3-2026",
      lastPlayed: "23-3-2026",
      gameSummary: "",
      gameSettings: {},
      setupPrompts: [],
    },
    {
      id: 2,
      title: "Empty Game Slot",
      dateSaved: "",
      lastPlayed: "",
      gameSummary: "",
      gameSettings: {},
      setupPrompts: [],
    },
  ],
}));
