import { create } from "zustand";

export const useGameDataStore = create((set) => ({
  bootPhrases: [
    "Loading the mainframe...",
    "Warming up the world engine...",
    "Brushing off the editor...",
    "Tweaking the nuts and bolts...",
    "Coffee break, back in 5 minutes...",
  ],
}));
