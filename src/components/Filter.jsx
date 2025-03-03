import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';

const Filter = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <fieldset className="fieldset bg-white dark:bg-gray-950 border border-base-300 p-4 rounded-box">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* 지역 */}
          <div className="w-full">
            <label
              htmlFor="location"
              className="mb-2 block text-sm font-medium text-gray-700 text-left">
              지역
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="지역"
              className="input bg-base-200 w-full"
            />
          </div>

          {/* 객실 종류 */}
          <div className="w-full">
            <label
              htmlFor="roomType"
              className="mb-2 block text-sm font-medium text-gray-700 text-left">
              객실 종류
            </label>
            <input
              type="text"
              id="roomType"
              name="roomType"
              className="input bg-base-200 w-full"
              placeholder="객실 종류"
            />
          </div>

          {/* 뷰 종류 */}
          <div className="w-full">
            <label
              htmlFor="viewType"
              className="mb-2 block text-sm font-medium text-gray-700 text-left">
              뷰 종류
            </label>
            <input
              type="text"
              id="viewType"
              name="viewType"
              className="input bg-base-200 w-full"
              placeholder="뷰 종류"
            />
          </div>

          {/* 숙박당 요금 */}
          <div className="w-full">
            <label
              htmlFor="pricePerNight"
              className="mb-2 block text-sm font-medium text-gray-700 text-left">
              숙박당 요금
            </label>
            <input
              type="number"
              id="pricePerNight"
              name="pricePerNight"
              className="input bg-base-200 w-full"
              placeholder="숙박당 요금"
            />
          </div>

          {/* 인원수 */}
          <div className="w-full">
            <label
              htmlFor="peopleCount"
              className="mb-2 block text-sm font-medium text-gray-700 text-left">
              인원수
            </label>
            <input
              type="number"
              id="peopleCount"
              name="peopleCount"
              className="input bg-base-200 w-full"
              placeholder="인원수"
            />
          </div>

          {/* 검색 버튼 */}
          <div className="mt-2 flex items-center justify-center col-span-full">
            <Link
              to="/products"
              className="flex items-center gap-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <BiSearch /> 검색
            </Link>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default Filter;
