import { create } from 'zustand';

//
const useProductStore = create((set) => ({
  pageIndex: 1,
  setPageIndex: (index) =>
    set(() => ({
      pageIndex: index,
    })),
  resetPageIndex: () =>
    set(() => ({
      pageIndex: 1,
    })),
}));

export default usePageStore;
