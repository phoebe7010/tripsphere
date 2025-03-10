import React from 'react';
import useCounterStore from '../../stores/useCounterStore';
import { BiPlus, BiMinus } from 'react-icons/bi';

const Counter = ({ type, label }) => {
  const { [type]: count, increase, decrease } = useCounterStore();

  return (
    <div className="flex items-center">
      <p>{label}</p>

      <div className="flex items-center gap-2">
        <button
          className="btn btn-circle"
          onClick={() => decrease(type)}>
          <BiMinus className="size-[1.2em]" />
        </button>

        <input
          type="number"
          value={count}
          className="input bg-base-200 w-20"
          readOnly
        />

        <button
          className="btn btn-circle"
          onClick={() => increase(type)}>
          <BiPlus className="size-[1.2em]" />
        </button>
      </div>
    </div>
  );
};

export default Counter;
