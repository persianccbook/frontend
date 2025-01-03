import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type ReaderMenu = "settings" | "contents";

interface ReaderState {
  fontSize: number;
  activeMenu: ReaderMenu;
  isMenuVisible: boolean;
  isMobileMenuOpen: boolean;
}

interface ReaderAction {
  setFontSize: (fontSize: number) => void;
  setActiveMenu: (activeMenu: ReaderMenu) => void;
  toggleMenuVisibility: () => void;
  toggleMobileMenuState: () => void;
}

const useReaderStore = create(
  persist<ReaderState & ReaderAction>(
    (set, get) => ({
      fontSize: 14,
      activeMenu: "contents",
      isMenuVisible: false,
      isMobileMenuOpen:false,
      setFontSize: (fontSize) => {
        set(() => ({ fontSize: fontSize }));
      },
      setActiveMenu: (activeMenu) => {
        set(() => ({ activeMenu: activeMenu }));
      },
      toggleMenuVisibility: () => {
        set(() => ({ isMenuVisible: !get().isMenuVisible }));
      },
      toggleMobileMenuState: () => {
        set(() => ({ isMobileMenuOpen: !get().isMobileMenuOpen }));
      },
    }),
    {
      name: "reader-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useReaderStore;
