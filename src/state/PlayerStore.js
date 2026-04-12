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
  updatePlayerStat: (stat, type, value) =>
    set((state) => {
      if (stat === "health") {
        if (type === "decrease") {
          state.playerStats.health = state.playerStats.health - value;
        } else if (type === "increase") {
          state.playerStats.health = state.playerStats.health + value;
        }

        if (state.playerStats.health > 10) {
          state.playerStats.health = 10;
        } else if (state.playerStats.health < 0) {
          state.playerStats.health = 0;
        }
      } else if (stat === "energy") {
        if (type === "decrease") {
          state.playerStats.energy = state.playerStats.energy - value;
        } else if (type === "increase") {
          state.playerStats.energy = state.playerStats.energy + value;
        }

        if (state.playerStats.energy > 10) {
          state.playerStats.energy = 10;
        } else if (state.playerStats.energy < 0) {
          state.playerStats.energy = 0;
        }
      } else if (stat === "strength") {
        if (type === "decrease") {
          state.playerStats.strength = state.playerStats.strength - value;
        } else if (type === "increase") {
          state.playerStats.strength = state.playerStats.strength + value;
        }

        if (state.playerStats.strength > 10) {
          state.playerStats.strength = 10;
        } else if (state.playerStats.strength < 0) {
          state.playerStats.strength = 0;
        }
      } else if (stat === "luck") {
        if (type === "decrease") {
          state.playerStats.luck = state.playerStats.luck - value;
        } else if (type === "increase") {
          state.playerStats.luck = state.playerStats.luck + value;
        }

        if (state.playerStats.luck > 10) {
          state.playerStats.luck = 10;
        } else if (state.playerStats.luck < 0) {
          state.playerStats.luck = 0;
        }
      }

      return state;
    }),
}));
