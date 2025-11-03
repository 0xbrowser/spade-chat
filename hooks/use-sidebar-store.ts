import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface SidebarStore {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggleOpen: () => void;
}

export const useSidebarStore = create<SidebarStore>()(
  persist(
    (set) => ({
      open: true,
      setOpen: (open) => set({ open }),
      toggleOpen: () => set((state) => ({ open: !state.open })),
    }),
    {
      name: 'sidebar-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

