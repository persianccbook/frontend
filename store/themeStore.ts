import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ThemeState {
  mode: string;
  toggleMode: () => void;
}

const useThemeStore = create(
  persist<ThemeState>(
    (set, get) => ({
      mode: "dark",
      toggleMode: () => {
        const currentMode = get().mode;
        set({ mode: currentMode === "dark" ? "light" : "dark" });
      },
    }),
    {
      name: "theme-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useThemeStore;
