import { FcApproval, FcCancel, FcClock, FcQuestions } from 'react-icons/fc';

const OrderState = ({ order }) => {
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
    <div className="flex flex-col justify-center items-center gap-4 h-83 ">
      <State size={50} />
      <h1 className="text-4xl font-semibold tracking-tight text-gray-900 ">
        {message}
      </h1>

      <div className="p-5 text-sm font-semibold">
        <p>주문 번호 : {order.order_id}</p>
      </div>
    </div>
  );
};

export default OrderState;
