import React from 'react';

const city = [
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
];

const CitySelector = ({ selectedCity, handleCityChange }) => {
  return (
    <div className="w-full">
      <label
        htmlFor="peopleCount"
        className="mb-2 block text-sm font-medium text-gray-700 text-left dark:text-gray-200">
        여행지
      </label>
      <div className="dropdown w-full">
        <input
          tabIndex={0}
          role="button"
          className="input bg-base-200 w-full dark:border-gray-200 dark:placeholder:text-gray-200"
          placeholder="여행지"
          value={selectedCity}
        />
        <div
          tabIndex={0}
          className="dropdown-content card card-sm bg-base-100 z-1 w-64 shadow-md">
          <div className="card-body space-y-2 grid grid-cols-3">
            {city.map((item, index) => (
              <label
                key={index}
                className={`flex items-center justify-center p-2 cursor-pointer rounded-sm border-1 ${
                  selectedCity === item
                    ? 'border-blue-500 bg-blue-100'
                    : 'border-gray-300 hover:border-blue-300'
                }`}>
                <input
                  type="radio"
                  name="city"
                  value={item}
                  onChange={handleCityChange}
                  className="hidden"
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitySelector;
