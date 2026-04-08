import { create } from "zustand";

export const useBootStore = create((set) => ({
  bootActive: "true",
  loadBootCheck: () =>
    set((state) => {
      const bootActiveStatus = localStorage.getItem("bootActiveStatus");
      if (bootActiveStatus !== null) {
        state.bootActive = bootActiveStatus;
      } else {
        state.bootActive = "true";
      }
      return state;
    }),
  updateBootActive: () =>
    set((state) => {
      localStorage.setItem("bootActiveStatus", "false");
      state.bootActive = "false";
      return state;
    }),
}));
