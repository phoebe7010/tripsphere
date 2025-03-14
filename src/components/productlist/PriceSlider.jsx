import React, { useEffect } from 'react';
import { Range } from 'react-range';

const PriceSlider = ({
  range,
  setRange,
  min = 0,
  max = 35,
  minimum = 5,
  maximum = 30,
  step = 5,
}) => {
  const handleInputChange = (index, value) => {
    let newRange = [...range];
    newRange[index] = Number(value);

    if (newRange[0] < minimum) {
      newRange[0] = 0;
    }

    if (newRange[0] >= maximum) {
      newRange[0] = max - step;
      value = max - step;
    }

    if (maximum < newRange[1]) {
      newRange[1] = maximum;
    }

    if (newRange[1] <= minimum) {
      newRange[1] = minimum;
      value = min + step;
    }

    setRange(newRange);
  };

  useEffect(() => {
    [range];
  });

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex justify-between items-center mb-4 gap-4">
        <div className="flex justify-between items-center gap-x-3">
          <span>최소</span>
          <input
            type="number"
            value={range[0]}
            min={min}
            max={max}
            step={1}
            onChange={(e) => handleInputChange(0, e.target.value)}
            className="border px-1 py-1 w-10 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
        </div>
        ~
        <div className="flex justify-between items-center gap-x-3">
          <span>최대</span>
          <input
            type="number"
            value={range[1]}
            min={min}
            max={max}
            step={1}
            onChange={(e) => handleInputChange(1, e.target.value)}
            className="border px-1 py-1 w-10 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
        </div>
      </div>
      <Range
        values={range}
        step={step}
        min={min}
        max={max}
        onChange={setRange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              background: '#ddd',
              borderRadius: '3px',
              position: 'relative',
            }}>
            <div
              style={{
                position: 'absolute',
                height: '100%',
                left: `${((range[0] - min) / (max - min)) * 100}%`,
                right: `${100 - ((range[1] - min) / (max - min)) * 100}%`,
                background: '#4CAF50',
                borderRadius: '3px',
              }}
            />
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '16px',
              width: '16px',
              backgroundColor: '#4CAF50',
              borderRadius: '50%',
              border: '2px solid white',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          />
        )}
      />
    </div>
  );
};

export default PriceSlider;
