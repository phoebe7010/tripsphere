import React, { useState } from 'react';
import { BiPlus, BiMinus } from 'react-icons/bi';

const Counter = ({ type, label, handlePeopleCount }) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prev) => {
      const newCount = prev + 1;
      handlePeopleCount(type, newCount);
      return newCount;
    });
  };

  const decrease = () => {
    setCount((prev) => {
      if (prev > 0) {
        const newCount = prev - 1;
        handlePeopleCount(type, newCount);
        return newCount;
      }
      return prev;
    });
  };

  return (
    <div className="flex items-center justify-between">
      <p>{label}</p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="btn btn-circle"
          onClick={decrease}>
          <BiMinus className="size-[1.2em]" />
        </button>

        <input
          type="number"
          value={count}
          className="input bg-base-200 w-20 text-center"
          readOnly
        />

        <button
          type="button"
          className="btn btn-circle"
          onClick={increase}>
          <BiPlus className="size-[1.2em]" />
        </button>
      </div>
    </div>
  );
};

export default Counter;
