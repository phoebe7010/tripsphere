import React from 'react';
import List from '../../components/List';
import { useNavigate } from 'react-router-dom';
import { FcApproval } from 'react-icons/fc';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1200px] mx-auto py-[40px]">
      <div className="flex flex-col items-center gap-4">
        <FcApproval size={50} />
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 ">
          주문이 완료되었습니다.
        </h1>
      </div>
      <List />

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          onClick={() => navigate('/mypage')}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          마이페이지로 이동
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
