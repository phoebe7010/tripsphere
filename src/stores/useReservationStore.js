import { create } from 'zustand';

const useReservationStore = create((set) => ({
  adultCount: 0,
  childrenCount: 0,
  checkIn: '',
  checkOut: '',

  // 어른 수 변경
  setAdultCount: (num) => set({ adultCount: num }),

  // 미성년자 수 변경
  setChildrenCount: (num) => set({ childrenCount: num }),

  // 체크인 날짜 변경
  setCheckIn: (date) => set({ checkIn: date }),

  // 체크아웃 날짜 변경
  setCheckOut: (date) => set({ checkOut: date }),
}));

export default useReservationStore;
