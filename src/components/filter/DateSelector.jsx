import React, { useEffect, useState } from 'react';
import DatePicker from '../common/DatePicker';
import useFilterStore from '../../stores/useFilterStore';

const DateSelector = ({ openDate, setOpenDate }) => {
  const { checkIn, checkOut, setCheckIn, setCheckOut } = useFilterStore();
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  useEffect(() => {
    console.log('Updated date:', date);
    console.log(checkIn);
    console.log(checkOut);
    if (date.startDate && date.endDate) {
      setCheckIn(date.startDate.toLocaleDateString());
      setCheckOut(date.endDate.toLocaleDateString());
    }
  }, [date]);

  return (
    <div className="w-full">
      <label
        htmlFor="roomType"
        className="mb-2 block text-sm font-medium text-gray-700 text-left dark:text-gray-200">
        체크인 · 체크아웃
      </label>

      <DatePicker
        openDate={openDate}
        setOpenDate={setOpenDate}
        date={date}
        setDate={setDate}
      />
    </div>
  );
};

export default DateSelector;
