import { create } from 'zustand';

// rangeLimit : 가격 범위 고정값으로 활용
//   하위 속성 : min, max
// range : 가격 범위 가변으로 사용
//   하위 속성 : min, max
const usePriceStore = create((set) => ({
  // 6. 스토어 상태변경 후 잘됨
  // 가격최대최소 고정범위 조정
  rangeLimit: { min: 0, max: 35 },
  setLimitLow: (val) =>
    set((state) => ({ rangeLimit: { ...state.rangeLimit, min: val } })),
  setLimitHigh: (val) =>
    set((state) => ({ rangeLimit: { ...state.rangeLimit, max: val } })),
  // 가격 범위 조정
  range: { min: 0, max: 35 },
  setRangeMin: (val) =>
    set((state) => ({ range: { ...state.range, min: val } })),
  setRangeMax: (val) =>
    set((state) => ({ range: { ...state.range, max: val } })),
}));

export default usePriceStore;
