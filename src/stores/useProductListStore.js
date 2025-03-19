import { create } from 'zustand';
import { persist } from 'zustand/middleware';

//
const useProductListStore = create()(
  persist((set) => ({
    list: [],
    setList: (data) =>
      set(() => ({
        list: data,
      })),
    resetList: () =>
      set(() => ({
        list: [],
      })),
  })),
);

export default useProductListStore;
