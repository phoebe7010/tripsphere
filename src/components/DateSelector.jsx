import React from 'react';
import DatePicker from './DatePicker';

const DateSelector = ({ openDate, setOpenDate }) => (
  <div className="w-full">
    <label
      htmlFor="roomType"
      className="mb-2 block text-sm font-medium text-gray-700 text-left">
      체크인 · 체크아웃
    </label>
    <DatePicker
      openDate={openDate}
      setOpenDate={setOpenDate}
    />
  </div>
);

export default DateSelector;
