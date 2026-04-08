import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  playerStats: {
    health: 10,
    energy: 10,
    strength: 10,
    luck: 10,
    inventory: {
      primary: "",
      pickUpOne: "Empty Space",
      pickUpTwo: "Empty Space",
    },
  },
  updatePlayerInventory: (playerClass) =>
    set((state) => {
      if (playerClass.toLowerCase() === "rogue") {
        state.playerStats.inventory = {
          primary: "Lockpick",
          pickUpOne: "Empty Space",
          pickUpTwo: "Empty Space",
        };
      } else if (playerClass.toLowerCase() === "fighter") {
        state.playerStats.inventory = {
          primary: "Sword",
          pickUpOne: "Empty Space",
          pickUpTwo: "Empty Space",
        };
      } else if (playerClass.toLowerCase() === "healer") {
        state.playerStats.inventory = {
          primary: "Staff",
          pickUpOne: "Empty Space",
          pickUpTwo: "Empty Space",
        };
      } else if (playerClass.toLowerCase() === "magician") {
        state.playerStats.inventory = {
          primary: "Wand",
          pickUpOne: "Empty Space",
          pickUpTwo: "Empty Space",
        };
      }
      return state;
    }),
}));
