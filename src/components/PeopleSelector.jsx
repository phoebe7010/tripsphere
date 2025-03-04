import React from 'react';
import Counter from './Counter';
import useCounterStore from '../stores/useCounterStore';

const PeopleSelector = () => {
  const { childrenCount, adultCount } = useCounterStore(state => state);

  return (
    <div className="w-full">
      <label
        htmlFor="peopleCount"
        className="mb-2 block text-sm font-medium text-gray-700 text-left">
        인원수
      </label>
      <div className="dropdown w-full">
        <input
          tabIndex={1}
          role="button"
          className="input bg-base-200 w-full"
          placeholder="인원수"
          value={`총 인원 ${adultCount + childrenCount}`}
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
