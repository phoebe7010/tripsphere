import { create } from 'zustand';

const useFilterStore = create((set) => ({
  selectedCity: '',
  selectedSubCity: '',
  people: 1,
  checkIn: '',
  checkOut: '',

  // 지역 대분류(시·도) 변경
  setSelectedCity: (city) => set({ selectedCity: city }),

  // 지역 소분류(시·군·구) 변경
  setSelectedSubCity: (subCity) => set({ selectedSubCity: subCity }),

  // 인원수 변경
  setPeople: (num) => set({ people: num }),

  // 체크인 날짜 변경
  setCheckIn: (date) => set({ checkIn: date }),

  // 체크아웃 날짜 변경
  setCheckOut: (date) => set({ checkOut: date }),
}));

export default useFilterStore;
