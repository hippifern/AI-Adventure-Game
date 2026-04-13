import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  playerStats: {
    health: 10,
    energy: 10,
    strength: 10,
    luck: 10,
  },
  setPlayerStat: (playerClass) =>
    set((state) => {
      if (playerClass.toLowerCase() === "rogue") {
        state.playerStats.health = 7;
        state.playerStats.energy = 7;
        state.playerStats.strength = 5;
        state.playerStats.luck = 10;
      }

      if (playerClass.toLowerCase() === "fighter") {
        state.playerStats.health = 7;
        state.playerStats.energy = 7;
        state.playerStats.strength = 10;
        state.playerStats.luck = 5;
      }

      if (playerClass.toLowerCase() === "healer") {
        state.playerStats.health = 10;
        state.playerStats.energy = 7;
        state.playerStats.strength = 5;
        state.playerStats.luck = 7;
      }

      if (playerClass.toLowerCase() === "magician") {
        state.playerStats.health = 10;
        state.playerStats.energy = 10;
        state.playerStats.strength = 5;
        state.playerStats.luck = 5;
      }

      return state;
    }),
  updatePlayerStat: (type, value) =>
    set((state) => {
      if (type === "+") {
        state.playerStats.health = state.playerStats.health + value;
      } else if (type === "-") {
        state.playerStats.health = state.playerStats.health - value;
      }

      if (state.playerStats.health > 10) {
        state.playerStats.health = 10;
      } else if (state.playerStats.health < 0) {
        state.playerStats.health = 0;
      }

      return state;
    }),
}));
