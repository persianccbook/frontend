import { create } from "zustand";

interface ThemeState {
  mode: string;
  toggleMode: () => void;
}

const useThemeStore = create<ThemeState>((set, get) => ({
  mode: "dark",
  toggleMode:()=>{
    get().mode === "dark"?set(()=>({mode:"light"})):set(()=>({mode:"dark"}))
  }
}));

export default useThemeStore;
