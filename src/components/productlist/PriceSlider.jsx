import { useEffect, useState } from 'react';
import { Range } from 'react-range';
import usePriceStore from '../../stores/usePriceStore';

const PriceSlider = ({ step = 5 }) => {
  const {
    range,
    setLimitLow,
    setLimitHigh,
    rangeLimit,
    setRangeMin,
    setRangeMax,
  } = usePriceStore();

  const [values, setValues] = useState([range.min, range.max]);

  const handleInputChange = (index, value) => {
    if (index === 0) {
      setRangeMin(value);
      setValues(...values, (values[0] = range.min));
    }
    if (index === 1) {
      setRangeMax(value);
      setValues(...values, (values[1] = range.max));
      console.log('value : ' + values);
      console.log('range : ' + range);
    }
  };

  useEffect(() => {
    console.log('do nothing'), [range];
  });

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex justify-between items-center mb-4 gap-4">
        <div className="flex justify-between items-center gap-x-3">
          <span>최소</span>
          <input
            type="number"
            value={range.min}
            min={rangeLimit.min}
            max={rangeLimit.max}
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
            value={range.max}
            min={rangeLimit.min}
            max={rangeLimit.max}
            step={1}
            onChange={(e) => handleInputChange(1, e.target.value)}
            className="border px-1 py-1 w-10 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
        </div>
      </div>

      <Range
        label="Select your value"
        step={0.1}
        min={rangeLimit.min}
        max={rangeLimit.max}
        values={values}
        onChange={(values, index) => {
          console.log('values:', values, 'index:', index);
          handleInputChange(index, values);
        }}
        renderTrack={({ props, children }) => (
          //트랙 css적용
          <div
            {...props}
            className="bg-gray-300 w-full h-1">
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            key={props.key}
            // style={{
            //   ...props.style,
            //   height: '42px',
            //   width: '42px',
            //   backgroundColor: '#999',
            // }}
            className="bg-gray-600 w-8 h-8"
          />
        )}
      />

      {/* <Range
        label="가격 범위 조정"
        value={[range.min, range.max]}
        step={step}
        min={rangeLimit.min}
        max={rangeLimit.max}
        onChange={(values) => {
          console.log(values);
        }}
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
                left: `${
                  ((range.min - rangeLimit.min) /
                    (rangeLimit.max - rangeLimit.min)) *
                  100
                }%`,
                right: `${
                  100 -
                  ((range.max - rangeLimit.min) /
                    (rangeLimit.max - rangeLimit.min)) *
                    100
                }%`,
                background: '#4CAF50',
                borderRadius: '3px',
              }}
            />
            {children}
          </div>
        )}
        renderThumb={({ props, index }) => (
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
      /> */}
    </div>
  );
};

export default PriceSlider;
