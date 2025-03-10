import { ko } from 'date-fns/locale';
import React, { useRef, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useClickAway } from 'react-use';

const DatePicker = ({ openDate, setOpenDate }) => {
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const ref = useRef(null);

  // 바깥 클릭 시 닫히도록 설정
  useClickAway(ref, () => setOpenDate(false));

  return (
    <div
      ref={ref}
      className="relative ">
      <input
        type="text"
        className="input bg-base-200 w-full  dark:border-gray-200"
        value={`${date.startDate.toLocaleDateString()} - ${date.endDate.toLocaleDateString()}`}
        readOnly
        onClick={() => setOpenDate(!openDate)}
      />

      {openDate && (
        <DateRangePicker
          className="absolute top-full left-0 mb-2"
          ranges={[date]}
          onChange={ranges => setDate(ranges.selection)}
          locale={ko}
        />
      )}
    </div>
  );
};

export default DatePicker;
