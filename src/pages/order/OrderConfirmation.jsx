import React, { useEffect } from 'react';
import { FcApproval } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      // 홈으로 이동하기
    }, 10000);
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto py-[40px]">
      {/* 주문 완료 문구 */}
      <div className="flex flex-col justify-center items-center gap-4 h-96">
        <FcApproval size={50} />
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 ">
          주문이 완료되었습니다.
        </h1>
        <p>10초 후 자동으로 홈으로 이동합니다.</p>
      </div>

      <div className="flex justify-center gap-x-16">
        {/* 홈으로 이동*/}
        <div className="">
          <button
            type="submit"
            onClick={() => navigate('/')}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            홈으로 이동
          </button>
        </div>

        {/* 마이페이지로 이동 버튼 */}
        <div className="">
          <button
            type="submit"
            onClick={() => navigate('/mypage')}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            마이페이지로 이동
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
