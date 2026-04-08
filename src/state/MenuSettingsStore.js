import { create } from "zustand";

export const useMenuSettingsStore = create((set) => ({
  menuSettings: [
    {
      settingTitle: "genre",
      settingSelected: -1,
      settingSelectedName: "",
    },
    {
      settingTitle: "playerClass",
      settingSelected: -1,
      settingSelectedName: "",
    },
    {
      settingTitle: "difficulty",
      settingSelected: -1,
      settingSelectedName: "",
    },
  ],
  updateMenuSettings: (setting) =>
    set((state) => {
      state.menuSettings[setting.settingId] = {
        settingTitle: setting.settingTitle,
        settingSelected: setting.settingSelected,
        settingSelectedName: setting.settingSelectedName,
      };
      return state;
    }),
  clearMenuSettings: () => set(),
  resetMenuSettingss: () => set(),
}));
