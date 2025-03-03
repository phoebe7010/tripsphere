import React from 'react';
import List from '../../components/List';
import { useNavigate } from 'react-router-dom';

const OrderHistory = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[700px] mx-auto py-[40px]">
      <List />

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          onClick={() => navigate('/mypage')}
          className="text-sm/6 font-semibold text-gray-900">
          뒤로 가기
        </button>
      </div>
    </div>
  );
};

export default OrderHistory;
