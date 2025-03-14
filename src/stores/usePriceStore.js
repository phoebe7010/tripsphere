import { create } from 'zustand';

// priceRange : 초기 세팅값 활용
// valueMinimum : 범위 최소값, 이 설정 이하면 0으로 잡음
// valueMaximum : 범위 최대값, 이 설정 이상이면 최대로 잡음
const usePriceStore = create((set) => ({
  priceRange: { min: 0, max: 35 },
  valueMinimum: 5,
  valueMaximum: 30,
  setLowPrice: (val) => set((state) => ({ ...state.priceRange, min: val })),
  sethighPrice: (val) => set((state) => ({ ...state.priceRange, max: val })),
  setMinimum: (min) => set((state) => ({ valueMinimum: min })),
  setMaximum: (max) => set((state) => ({ valueMaximum: max })),
}));

export default usePriceStore;
