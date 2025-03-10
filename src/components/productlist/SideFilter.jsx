import { useState } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import DateSelector from '../common/DateSelector';
import PeopleSelector from '../common/PeopleSelector';

const SideFilter = () => {
  const [priceRange, setPriceRange] = useState(25);
  const [isFormOpen, setIsFormOpen] = useState(true);

  const [openDate, setOpenDate] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(prevState => !prevState);
  };

  return (
    <aside className={`sidebar sticky top-5 ${isFormOpen ? 'w-[30%]' : 'w-0'}`}>
      <div className="flex mb-4 items-center justify-between">
        {isFormOpen && <div>검색 영역</div>}
        <button
          type="button"
          onClick={toggleForm}
          className={`border border-gray-200 px-0.5 py-2 ${
            isFormOpen ? 'rounded-l-md' : 'rounded-r-md'
          }`}>
          <BiChevronLeft
            className={`transition-transform duration-300 ${
              !isFormOpen ? 'rotate-180' : ''
            } size-6`}
          />
        </button>
      </div>

      {isFormOpen && (
        <form className="flex flex-col gap-y-5 p-2.5">
          {/* 여행 장소 선택 */}
          <fieldset className="rounded-lg border border-gray-200 p-3">
            <legend className="fieldset-legend px-2 font-medium">
              여행 장소
            </legend>
            <div className="grid grid-cols-2 gap-2">
              {[
                '서울',
                '부산',
                '제주도',
                '속초',
                '강릉',
                '전주',
                '대구',
                '경주',
                '여수',
                '서귀포',
                '대전',
                '인천',
              ].map(ele => (
                <label
                  htmlFor={ele}
                  key={ele}
                  className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox"
                    id={ele}
                    name={ele}
                  />
                  <span>{ele}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* 숙박 장소 선택 */}
          <fieldset className="rounded-lg border border-gray-200 p-3">
            <legend className="fieldset-legend px-2 font-medium">
              숙박 장소
            </legend>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2">
              {['호텔', '펜션', '게스트하우스', '캠핑'].map(ele => (
                <label
                  htmlFor={ele}
                  key={ele}
                  className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox"
                    id={ele}
                    name={ele}
                  />
                  <span>{ele}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* 예산 범위 선택 */}
          <fieldset className="rounded-lg border border-gray-200 p-3">
            <legend className="fieldset-legend px-2 font-medium">가격</legend>
            <div className="flex items-center justify-between">
              <div className="w-full max-w-xs">
                <input
                  type="range"
                  min={0}
                  max="30"
                  value={priceRange}
                  className="range"
                  step="1"
                  onChange={e => setPriceRange(Number(e.target.value))}
                />
                <div className="flex justify-between px-2.5 mt-2 text-xs">
                  <span>0</span>
                  <span>5만원</span>
                  <span>10만원</span>
                  <span>15만원</span>
                  <span>20만원</span>
                  <span>25만원</span>
                  <span>30만원</span>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset className="fieldset border border-base-300 p-4 rounded-box dark:border-white">
            <legend className="fieldset-legend px-2 font-medium">일정</legend>
            <DateSelector
              openDate={openDate}
              setOpenDate={setOpenDate}
            />

            <PeopleSelector />
          </fieldset>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            옵션 수정 적용
          </button>
        </form>
      )}
    </aside>
  );
};

export default SideFilter;
