import React from 'react';
import useCounterStore from '../stores/useCounterStore';
import Counter from './Counter';

const PeopleSelector = () => {
  const { childrenCount, adultCount } = useCounterStore(state => state);

  return (
    <div className="w-full">
      <label
        htmlFor="peopleCount"
        className="mb-2 block text-sm font-medium text-gray-700 text-left dark:text-gray-200">
        인원수
      </label>
      <div className="dropdown w-full">
        <input
          tabIndex={1}
          role="button"
          className="input bg-base-200 w-full dark:border-gray-200"
          placeholder="인원수"
          defaultValue={`총 인원 ${adultCount + childrenCount}`} // Read-only input with defaultValue
          readOnly
        />
        <div
          tabIndex={1}
          className="dropdown-content card card-sm bg-base-100 z-1 w-64 shadow-md">
          <div className="card-body">
            <Counter
              type="adultCount"
              label="성인"
            />
            <Counter
              type="childrenCount"
              label="어린이"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleSelector;
