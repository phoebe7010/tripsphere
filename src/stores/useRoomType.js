import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useRoomType = create()(
  persist((set) => ({
    roomTypes: [],
    defaultOption: ['hotel', 'motel', 'pension', 'resort', 'camping', 'guest'],
    addRoomTypes: (data) =>
      set((state) => ({
        roomTypes: [...state.roomTypes, data],
      })),
    delRoomTypes: (data) =>
      set((state) => ({
        roomTypes: roomTypes.filter((ele) => ele !== data),
      })),
    resetRoomTypes: () =>
      set(() => ({
        roomTypes: [],
      })),
  })),
  {
    name: 'roomTypeStorage',
  },
);
export default useRoomType;
