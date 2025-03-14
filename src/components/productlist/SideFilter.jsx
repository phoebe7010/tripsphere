import { useEffect, useState } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import usePriceStore from '../../stores/usePriceStore';
import useRegionStore from '../../stores/useRegionStore';
import CitySelector from '../common/CitySelector';
import DateSelector from '../common/DateSelector';
import PeopleSelector from '../common/PeopleSelector';
import PriceSlider from './PriceSlider';
import regionList from './region.js';

const SideFilter = () => {
  // const [priceRange, setPriceRange] = useState(25);

  const [isFormOpen, setIsFormOpen] = useState(true);

  const [showRegionInfo, setShowRegionsInfo] = useState({});

  const [openDate, setOpenDate] = useState(false);
  const [range, setRange] = useState([0, 35]);

  const { region, showRegions, addRegion, delRegion } = useRegionStore();
  const {
    priceRange,
    valueMinimum,
    valueMaximum,
    setMinimum,
    setMaximum,
    setPriceRange,
    getPriceRange,
  } = usePriceStore();

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
            <CitySelector />
            <div className="flex flex-col w-full gap-y-3 divide-y-1">
              {showRegionInfo &&
                Object.entries(showRegionInfo).map(([keyName, places]) => (
                  <details key={keyName}>
                    <summary>{keyName}</summary>
                    <div className="grid grid-cols-2">
                      {/* "전체 선택" 체크박스를 가장 앞에 추가 */}
                      <label
                        htmlFor={`${keyName}_total`}
                        key={`${keyName}_total`}
                        className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox"
                          id={`${keyName}_total`}
                          name={`${keyName}_total`}
                        />
                        <span>전체</span>
                      </label>

                      {/* 개별 지역 체크박스 */}
                      {places.map((ele) => (
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
                  </details>
                ))}
            </div>
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
                  range={priceRange}
                  setRange={setPriceRange}
                  min={0}
                  max={valueMaximum + 5}
                  step={5}
                  className="relative w-full p-4"
                  trackClass="bg-gray-200 h-6 w-full rounded-full outline-1 outline-green-300"
                  thumbClass="bg-red-300 h-4 w-4 rounded-full"
                />

                {/* <input
                  type="range"
                  min={0}
                  max="30"
                  value={priceRange}
                  className="range"
                  step="1"
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
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
                  */}
              </div>
            </div>
          </fieldset>

          <fieldset className="fieldset border border-base-300 p-4 rounded-box dark:border-white">
            <legend className="fieldset-legend px-2 font-medium">일정</legend>
            {/* 체크인 · 체크아웃 */}
            <DateSelector
              openDate={openDate}
              setOpenDate={setOpenDate}
            />

            {/* 인원수 */}
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
