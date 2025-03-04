import { create } from 'zustand';

const useCounterStore = create(set => ({
  childrenCount: 0,
  adultCount: 0,
  increase: type =>
    set(state => ({
      [type]: state[type] + 1,
    })),
  decrease: type =>
    set(state => ({
      [type]: state[type] > 0 ? state[type] - 1 : 0,
    })),
}));

export default useCounterStore;
