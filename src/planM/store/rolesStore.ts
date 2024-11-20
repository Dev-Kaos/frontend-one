import { create } from "zustand";


interface IRolesStore {
  isCreating: boolean;
  isCreated: boolean;
  isEditing: boolean;
  setIsCreating: (isCreating: boolean) => void;
  setIsCreated: (isCreated: boolean) => void;
  setIsEditing: (isEditing: boolean) => void;
}

export const useRolesStore = create<IRolesStore>((set) => ({
  isCreating: false,
  isCreated: false,
  isEditing: false,
  setIsCreating: (isCreating) => set({ isCreating }),
  setIsCreated: (isCreated) => set({ isCreated }),
  setIsEditing: (isEditing) => set({ isEditing }),
}));
