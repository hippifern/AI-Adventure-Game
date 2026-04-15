import { create } from "zustand";

export const useBootStore = create((set) => ({
  bootActive: true,
  loadBootCheck: () =>
    set((state) => {
      const bootActiveStatus = localStorage.getItem("bootActiveStatus");
      if (bootActiveStatus !== null) {
        if ("false" === bootActiveStatus) {
          state.bootActive = false;
        } else {
          state.bootActive = true;
        }
      }
      return state;
    }),
  updateBootActive: () =>
    set((state) => {
      localStorage.setItem("bootActiveStatus", false.toString());
      state.bootActive = false;
      return state;
    }),
}));
