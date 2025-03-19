import React, { useState } from 'react';
import { BiCalendarAlt, BiChevronRight, BiUser } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { formatNumber } from '../../utils/format';
import CancelOrderModal from './CancelOrderModal';
import { useCancelOrder } from '../../hooks/useOrderData';

const OrderList = ({ orderInfo }) => {
  const navigate = useNavigate();
  const cancelOrderMutation = useCancelOrder();
  const [selectedOrder, setSelectedOrder] = useState(null);

  // 주문 취소 처리
  const handleCancelClick = (order) => {
    setSelectedOrder(order);
  };

  // 주문 취소 요청 -> firebase
  const handleCancelConfirm = (reason) => {
    if (selectedOrder) {
      cancelOrderMutation.mutate({
        orderId: selectedOrder.id,
        userId: selectedOrder.user_id,
        usedPoints: selectedOrder.used_points,
        reason,
      });
    }
  };

  // 오늘 날짜 가져오기
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // 체크인 날짜 지나면 주문 내역에서 제외
  const validOrders = orderInfo
    ? orderInfo.filter((order) => {
        const checkInDate = new Date(order.check_in);
        return checkInDate >= today; // 체크인 날짜가 오늘 이후인 주문만 표시
      })
    : [];

  return (
    <>
      <ul className="list bg-base-100 dark:bg-gray-800 rounded-box shadow-md py-">
        {/* 주문 내역 없을때 */}
        {validOrders.length === 0 ? (
          <div className="text-center py-5 text-gray-500">
            주문 내역이 없습니다.
          </div>
        ) : (
          // 주문 리스트
          validOrders.map((order, index) => {
            const checkInDate = new Date(order.check_in);
            const isTodayCheckIn =
              checkInDate.toDateString() === today.toDateString();

            return (
              <li
                key={index}
                className="list-row flex-col flex my-3 mx-5 border-gray-200">
                <div className="border-b border-stone-200 flex justify-between items-center">
                  <div>{order.order_date || '날짜 없음'}</div>
                  <button
                    type="button"
                    onClick={() =>
                      navigate(`/product/${order.accommodation_id}`)
                    }>
                    <BiChevronRight className="size-6" />
                  </button>
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-6">
                    <img
                      className="size-24 rounded-box"
                      src={
                        order.accommodation?.images?.[0] ||
                        'https://via.placeholder.com/100'
                      }
                      alt={order.accommodation?.name || '숙소 정보 없음'}
                    />
                    <div className="flex flex-col">
                      <h2 className="text-lg font-bold">
                        {order.accommodation?.name || '숙소 정보 없음'}
                      </h2>
                      <div className="text-xs uppercase opacity-60">
                        예약번호 : {order.id}
                      </div>

                      {/* 인원 정보 */}
                      <div className="flex items-center gap-2 mt-2">
                        <BiUser />
                        <div className="mr-1 text-sm">
                          성인: {order.guest_count?.adults ?? 0}명, 어린이:{' '}
                          {order.guest_count?.children ?? 0}명
                        </div>
                      </div>

                      {/* 체크인/체크아웃 날짜 */}
                      <div className="flex items-center gap-10 mt-2">
                        <div className="flex items-center gap-2">
                          <BiCalendarAlt />
                          <span className="font-bold">체크인:</span>{' '}
                          <span>{order.check_in || '날짜 없음'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BiCalendarAlt />
                          <span className="font-bold">체크아웃:</span>{' '}
                          <span>{order.check_out || '날짜 없음'}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 주문 취소버튼 */}
                  <div className="flex flex-col justify-between">
                    <div className="text-lg">
                      {formatNumber(order.total_price)}원
                    </div>
                    {order.payment_status === '결제 취소' ? (
                      <span className="text-red-500 font-bold">결제 취소</span>
                    ) : (
                      <button
                        className={`px-3 py-1 rounded-md transition ${
                          isTodayCheckIn
                            ? 'bg-gray-400 text-white cursor-not-allowed'
                            : 'bg-red-500 text-white hover:bg-red-700'
                        }`}
                        onClick={() =>
                          !isTodayCheckIn && handleCancelClick(order)
                        }
                        disabled={isTodayCheckIn}>
                        {isTodayCheckIn ? '취소 불가' : '주문 취소'}
                      </button>
                    )}
                  </div>
                </div>
              </li>
            );
          })
        )}
      </ul>

      {selectedOrder && (
        <CancelOrderModal
          isOpen={!!selectedOrder}
          onClose={() => setSelectedOrder(null)}
          onConfirm={handleCancelConfirm}
        />
      )}
    </>
  );
};

export default OrderList;
