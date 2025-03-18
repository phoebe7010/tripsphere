import React, { useState } from 'react';

import { RiCloseCircleLine } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';

const PointModal = ({ onClose, data }) => {
  const [balance, setBalance] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const handleBackgroundClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClearInput = () => {
    setInputValue(0);
  };

  const totalPoints = data.reduce((acc, item) => acc + item.points, 0);

  const handleCharge = () => {
    if (!isNaN(inputValue) && inputValue !== 0) {
      setBalance(`현재 포인트 총액은 ${totalPoints}포인트입니다`);
    } else {
      setBalance('충전할 포인트를 입력하세요');
    }
  };

  return (
    <div
      onClick={handleBackgroundClick}
      className="fixed w-[50%] h-[50%] top-[50%] left-[50%] translate-[-50%] z-10 border bg-white">
      <div className="relative w-full h-full p-12 ">
        <button
          onClick={onClose}
          className="absolute top-4 right-4">
          <AiOutlineClose size={30} />
        </button>
        <div className="relative w-full h-full ">
          <h2 className="text-2xl font-bold mb-12">포인트 충전</h2>
          <div className="w-full h-8 border-b-2 flex justify-between items-center gap-2 mb-30">
            <label
              htmlFor="poinCharge"
              className="flex-1">
              <input
                type="number"
                id="pointCharge"
                value={inputValue}
                onChange={handleInputChange}
                className="w-full h-8 text-right font-bold text-3xl"
              />
            </label>
            포인트
            <button onClick={handleClearInput}>
              <RiCloseCircleLine size={30} />
            </button>
          </div>
          <button
            onClick={handleCharge}
            type="submit"
            className="btn bg-green-500 w-full mb-4">
            포인트 충전
          </button>
          <p className="text-right font-bold">{balance}</p>
        </div>
      </div>
    </div>
  );
};

export default PointModal;
