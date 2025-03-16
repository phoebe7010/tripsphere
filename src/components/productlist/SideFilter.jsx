import { useEffect, useState } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import usePriceStore from '../../stores/usePriceStore';
import useRegionStore from '../../stores/useRegionStore';
import CitySelector from '../common/CitySelector';
import DateSelector from '../common/DateSelector';
import PeopleSelector from '../common/PeopleSelector';
import PriceSlider from './PriceSlider.jsx';
import regionList from './region.js';

const SideFilter = () => {
  // const [priceRange, setPriceRange] = useState(25);

  const [isFormOpen, setIsFormOpen] = useState(true);

  const [showRegionInfo, setShowRegionsInfo] = useState({});

  const [openDate, setOpenDate] = useState(false);
  const [range, setRange] = useState([0, 35]);

  const { region, showRegions, addRegion, delRegion } = useRegionStore();

  // priceRange : 초기 세팅값 활용
  // valueMinimum : 범위 최소값, 이 설정 이하면 0으로 잡음
  // valueMaximum : 범위 최대값, 이 설정 이상이면 최대로 잡음
  const { priceRange, valueMinimum, valueMaximum, setPriceRange } =
    usePriceStore();

  const toggleForm = () => {
    setIsFormOpen((prevState) => !prevState);
    setIsFormOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setShowRegionsInfo(regionList);
    for (let key in showRegionInfo) {
      console.log(key);
      showRegionInfo[key].forEach((resionName) => {
        console.log(resionName);
      });
    }
  }, [region]);

  return (
    <aside
      className={`sidebar z-10 sticky top-5 ${isFormOpen ? 'w-[30%]' : 'w-0'}`}>
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
            <CitySelector isGlobal={true} />
          </fieldset>

          {/* 숙박 장소 선택 */}
          <fieldset className="rounded-lg border border-gray-200 p-3">
            <legend className="fieldset-legend px-2 font-medium">
              숙박 장소
            </legend>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2">
              {['호텔', '펜션', '게스트하우스', '캠핑'].map((ele) => (
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
          <fieldset className="rounded-lg border border-gray-200 px-3">
            <legend className="fieldset-legend px-2 font-medium">가격</legend>
            <div className="flex items-center justify-between">
              <div className="w-full p-3 max-w-xs">
                <PriceSlider
                  step={5}
                  className="relative w-full p-4"
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="fieldset border border-base-300 p-4 rounded-box dark:border-white">
            <legend className="fieldset-legend px-2 font-medium">일정</legend>
            {/* 체크인 · 체크아웃 */}
            <DateSelector
              stateType="filter"
              openDate={openDate}
              setOpenDate={setOpenDate}
            />

            {/* 인원수 */}
            <PeopleSelector stateType="filter" />
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
