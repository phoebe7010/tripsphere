import { create } from 'zustand';

const useRegionStore = create((set, get) => ({
  region: [],
  showRegions: {},
  setShowRegions: (regionInfo) =>
    set((state) => {
      state.showRegions = regionInfo;
    }),
  addRegion: (add) =>
    set((state) => {
      if (!state.region.includes(newRegion)) {
        // 중복 방지
        return { region: [...state.region, newRegion] };
      }
      return state;
    }),
  delRegion: (del) =>
    set((state) => ({
      region: state.region.filter((ele) => {
        ele !== del;
      }),
    })),
}));

export default useRegionStore;
