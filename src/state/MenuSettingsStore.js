import { create } from "zustand";

export const useMenuSettingsStore = create((set) => ({
  menuSettings: [
    {
      settingTitle: "genre",
      settingSelected: -1,
      settingSelectedName: "",
      settingSelectedDescription: "",
    },
    {
      settingTitle: "playerClass",
      settingSelected: -1,
      settingSelectedName: "",
      settingSelectedDescription: "",
    },
    {
      settingTitle: "difficulty",
      settingSelected: -1,
      settingSelectedName: "",
      settingSelectedDescription: "",
    },
  ],
  updateMenuSettings: (setting) =>
    set((state) => {
      state.menuSettings[setting.settingId] = {
        settingTitle: setting.settingTitle,
        settingSelected: setting.settingSelected,
        settingSelectedName: setting.settingSelectedName,
        settingSelectedDescription: setting.settingSelectedDescription,
      };
      return state;
    }),
  clearMenuSettings: (setting) =>
    set((state) => {
      state.menuSettings[setting.settingId] = {
        settingTitle: setting.settingTitle,
        settingSelected: -1,
        settingSelectedName: "",
        settingSelectedDescription: "",
      };
      return state;
    }),
  resetMenuSettingss: () =>
    set((state) => {
      state.menuSettings = [
        {
          settingTitle: "genre",
          settingSelected: -1,
          settingSelectedName: "",
          settingSelectedDescription: "",
        },
        {
          settingTitle: "playerClass",
          settingSelected: -1,
          settingSelectedName: "",
          settingSelectedDescription: "",
        },
        {
          settingTitle: "difficulty",
          settingSelected: -1,
          settingSelectedName: "",
          settingSelectedDescription: "",
        },
      ];
      return state;
    }),
}));
