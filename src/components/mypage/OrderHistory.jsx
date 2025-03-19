import React, { useEffect, useState } from 'react';
import { BiUser, BiCalendarAlt } from 'react-icons/bi';
import { HiOutlineTicket } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { formatNumber, formatDate } from '../../utils/format';
import { useOrderData } from '../../hooks/useOrderData';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';

const OrderHistory = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Firebase 인증 상태가 변경될 때마다 호출
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // 컴포넌트가 언마운트될 때 리스너를 정리
    return () => unsubscribe();
  }, []);

  const { data, isLoading, error } = useOrderData(user?.uid);

  useEffect(() => {
    if (data) {
      console.log('주문 목록 내역:', JSON.stringify(data));
    }
  }, [data]);

  if (isLoading) return <>로딩 중..</>;
  if (error) return <>오류</>;

  return (
    <div>
      <div className="my-8 p-4 pb-2 text-xs opacity-60 tracking-wide flex justify-between">
        <h2 className="flex items-center gap-2 font-bold text-xl">
          <HiOutlineTicket size={20} /> 주문 내역
        </h2>

        <Link
          to="/orderhistory"
          className="text-primary font-bold">
          더 보기
        </Link>
      </div>

      <ul className="mt-8 list bg-base-100 rounded-box shadow-md">
        {data &&
          data.map((order, index) => (
            <li
              className="list-row flex-col flex"
              key={index}>
              <div className="flex justify-between">
                <div className="flex gap-6">
                  <img
                    className="size-20 rounded-box"
                    src={order.images[1]}
                    alt={''}
                  />

                  <div className="flex flex-col">
                    <h2 className="text-md opacity-60 ">
                      {formatDate(order.order_date)}
                      {order.payment_status === 'completed'
                        ? '결제완료'
                        : '취소'}
                    </h2>

                    <div className="mb-4 text-xs uppercase font-bold">
                      예약번호 : {order.id}
                    </div>

                    <div className="flex-col flex gap-[4px] mt-auto">
                      <div className="flex items-center gap-2 text-xs">
                        <BiUser />
                        <div className="mr-1 text-xs">
                          인원수 (성인: {order.guest_count.adults}명 소아:
                          {order.guest_count.children}
                          명)
                        </div>
                      </div>

                      <div className="flex items-center gap-10">
                        <div className="flex items-center gap-2 text-xs">
                          <BiCalendarAlt />
                          <span>체크인:</span>
                          <span>{formatDate(order.check_in)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <BiCalendarAlt />
                          <span>체크아웃:</span>
                          <span>{formatDate(order.check_out)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>{formatNumber(order.total_price)}원</div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
