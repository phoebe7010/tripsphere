import { create } from 'zustand';

const usePriceStore = create((set) => ({
  priceRange: [0, 35],
  valueMinimum: 5,
  valueMaximum: 30,
  setMinimum: (min) => set((state) => ({ valueMinimum: min })),
  setMaximum: (min) => set((state) => ({ valueMaximum: min })),
  setPriceRange: (range) => set((state) => ({ priceRange: range })),
}));

export default usePriceStore;
