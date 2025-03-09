import React from 'react';
import { FcApproval, FcCancel, FcClock, FcQuestions } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const orderInfo = {
  order_id: 1,
  user_id: '주문한 사용자 UID',
  accommodation_id: '숙소 ID',
  check_in: '체크인 날짜',
  check_out: '체크아웃 날짜',
  guest_count: {
    adults: 2,
    children: 2,
  },
  total_price: 160000,
  payment_status:
    //'canceled',
    // 'pending',
    'completed', //결제 상태 (pending, completed, canceled)
  order_date: '주문 날짜',
  used_points: 160000,
};

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const OrderState = order => {
    let State;
    let message;

    switch (order.payment_status) {
      case 'pending':
        State = FcClock;
        message = '결제 대기중입니다.';
        break;
      case 'completed':
        State = FcApproval;
        message = '결제가 완료되었습니다.';
        break;
      case 'canceled':
        State = FcCancel;
        message = '결제가 취소 되었습니다.';
        break;
      default:
        State = FcQuestions;
        message = '정보를 확인할 수 없습니다.';
    }

    return (
      <div className="flex flex-col justify-center items-center gap-4 h-96">
        <State size={50} />
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 ">
          {message}
        </h1>

        <div className="p-10 text-sm font-semibold">
          <p>주문 번호 : {orderInfo.order_id}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-[1200px] mx-auto py-[40px]">
      <div className="flex flex-col items-center">
        {/* 주문 문구 */}
        {OrderState(orderInfo)}

        <div className="flex justify-center gap-x-8">
          {/* 홈으로 이동*/}
          <div className="">
            <button
              type="submit"
              onClick={() => navigate('/')}
              className="rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
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
    </div>
  );
};

export default OrderConfirmation;
