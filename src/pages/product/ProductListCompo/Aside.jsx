import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { MdOutlineCancel } from 'react-icons/md';

const Aside = () => {
  let bgClassName = `group fixed left-16 top-16 z-10 rounded-[30px] border bg-white  border-green-500 p-4 shadow-md`;

  function updateTheme() {
    let setTheme = `
    group fixed left-16 top-16 z-10 rounded-[30px] border 
    ${theme === 'light' ? 'bg-white' : 'bg-black'} 
    border-green-500 p-4 shadow-md
    `;
    bgClassName = setTheme;
  }

  return (
    <>
      {/* 검색 옵션 패널 */}
      <aside className={bgClassName}>
        <form className="flex flex-col gap-y-5 p-2.5">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-lg font-semibold">검색하기</h2>
            <button
              type="button"
              onClick={() => {}}>
              <MdOutlineCancel className="text-2xl text-red-500 hover:text-red-700 " />
            </button>
          </div>

          {/* 여행 장소 선택 */}
          <fieldset className="rounded-lg border border-gray-200 p-3">
            <legend className="px-2 font-medium">여행 장소</legend>
            <div className="grid grid-cols-2 gap-2">
              {['서울', '대전', '대구', '부산', '찍고', '아하'].map(ele => (
                <label
                  htmlFor={ele}
                  key={ele}
                  className="flex items-center space-x-2 cursor-pointer hover:bg-gray-300">
                  <input
                    type="checkbox"
                    id={ele}
                    name={ele}
                    className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span>{ele}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* 숙박 장소 선택 */}
          <fieldset className="rounded-lg border border-gray-200 p-3">
            <legend className="px-2 font-medium">숙박 장소</legend>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2">
              {['호텔', '펜션', '게스트하우스', '노숙'].map(ele => (
                <label
                  htmlFor={ele}
                  key={ele}
                  className="flex items-center space-x-2 cursor-pointer hover:bg-gray-300">
                  <input
                    type="checkbox"
                    id={ele}
                    name={ele}
                    className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span>{ele}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* 예산 범위 선택 */}
          <fieldset className="rounded-lg border border-gray-200 p-3">
            <legend className="px-2 font-medium">가격</legend>
            <div className="flex items-center justify-between">
              <label
                htmlFor="minbudget"
                className="flex items-center">
                <input
                  id="minbudget"
                  className="w-16 rounded border border-gray-300 p-1 text-center focus:border-green-500 focus:outline-none"
                />
                <span className="ml-1">만원</span>
              </label>
              <span className="mx-2">~</span>
              <label
                htmlFor="maxbudget"
                className="flex items-center">
                <input
                  id="maxbudget"
                  className="w-16 rounded border border-gray-300 p-1 text-center focus:border-green-500 focus:outline-none"
                />
                <span className="ml-1">만원</span>
              </label>
            </div>
          </fieldset>

          {/* 인원 수정 */}
          <fieldset className="rounded-lg border border-gray-200 p-3">
            <legend className="px-2 font-medium">인원</legend>
            <div className="mb-2 flex items-center">
              <label className="w-1/2">성인</label>
              <div className="flex w-1/2 items-center justify-end">
                <button type="button">
                  <CiCircleMinus className="text-3xl text-gray-300 hover:text-green-500" />
                </button>
                <input
                  type="number"
                  className="mx-2 w-10 rounded border border-gray-300 p-1 text-center focus:border-green-500 focus:outline-none"
                  min="0"
                />
                <button type="button">
                  <CiCirclePlus className="text-3xl text-gray-300 hover:text-green-500" />
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <label className="w-1/2">어린이</label>
              <div className="flex w-1/2 items-center justify-end">
                <button type="button">
                  <CiCircleMinus className="text-3xl text-gray-300 hover:text-green-500" />
                </button>
                <input
                  type="number"
                  className="mx-2 w-10 rounded border border-gray-300 p-1 text-center focus:border-green-500 focus:outline-none"
                  min="0"
                />
                <button type="button">
                  <CiCirclePlus className="text-3xl text-gray-300 hover:text-green-500" />
                </button>
              </div>
            </div>
          </fieldset>

          {/* 여행 기간 선택 */}
          <fieldset className="rounded-lg border border-gray-200 p-3">
            <legend className="px-2 font-medium">여행 기간 선택</legend>
            <div className="mb-2 flex items-center justify-between">
              <label className="w-1/4">시작</label>
              <input
                type="date"
                className="w-3/4 rounded border border-gray-300 p-1.5 focus:border-green-500 focus:outline-none"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="w-1/4">종료</label>
              <input
                type="date"
                className="w-3/4 rounded border border-gray-300 p-1.5 focus:border-green-500 focus:outline-none"
              />
            </div>
          </fieldset>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-green-100 py-2.5 font-medium text-green-800 border border-green-600 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            옵션 수정 적용
          </button>
        </form>
      </aside>
    </>
  );
};

export default Aside;
