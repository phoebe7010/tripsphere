import { create } from 'zustand';

// SPA라서 동작을 잘 모르겠음.
// 히스토리가 어떻게 관리되는지 모름
// 사용자가 보고있던 페이지에서 뒤로가기로 나왔을때, 보고있던 페이지의 번호로 나올지
// 아니면 그냥 페이지를 새로 로드하고 첫번째 인덱스로 돌아가는지..
const usePageStore = create((set) => ({
  pageIndex: 1,
  setPageIndex: (index) =>
    set(() => {
      pageIndex: index;
    }),
  resetPageIndex: () =>
    set(() => {
      pageIndex: 1;
    }),
}));

export default usePageStore;
