import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PeopleSelector from '../../components/common/PeopleSelector';
import { formatNumber, totalDays } from '../../utils/format';
import DateSelector from '../common/DateSelector';
import ServiceIcon from '../common/ServiceIcon';
import useReservationStore from '../../stores/useReservationStore';

const typeMapping = {
  pension: '펜션',
  hotel: '호텔',
  camping: '캠핑',
};

const serviceNames = {
  wifi: '와이파이',
  parking: '주차장',
  tv: 'TV',
  breakfast: '조식',
  barbecue: '바비큐',
};

const ProductDetails = ({ product }) => {
  const [openDate, setOpenDate] = useState(false);
  const navigate = useNavigate();
  const [adults, setAdults] = useState(0);
  const { checkIn, checkOut, setTotalPrice } = useReservationStore();

  // 총 주문 금액
  const totalPrice = useMemo(
    () =>
      (checkIn === checkOut ? 1 : totalDays(checkIn, checkOut)) *
      product.final_price,
    [checkIn, checkOut, product.final_price],
  );

  // 예약하기
  const handleReservation = (e) => {
    e.preventDefault();
    setTotalPrice(totalPrice);
    navigate('/checkout');
  };

  return (
    <div className="flex space-y-6 gap-10 mt-[30px]">
      <div className="flex-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {product.name}
          </h3>
          <div className="mt-1 max-w-2xl text-sm/6 text-gray-500">
            <div className="badge badge-soft badge-primary text-xs">
              {typeMapping[product.type]}
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <div className="divide-y divide-gray-100">
            <div className="px-4 py-6 gap-4 sm:px-0 text-sm/6 text-gray-70">
              <ul className="grid grid-cols-2 divide-y divide-gray-100 rounded-md border border-gray-200">
                {product.services.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center py-4 px-4 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="text-lg">
                        <ServiceIcon
                          key={service}
                          type={service}
                          className="text-lg"
                        />
                      </div>
                      <span>{serviceNames[service]}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-4 py-6 gap-4 sm:px-0 text-sm/6 text-gray-70">
              <ul className="list">
                <li className="list-row px-0 py-0">
                  <div>
                    <img
                      className="size-10 rounded-box"
                      src="https://img.daisyui.com/images/profile/demo/1@94.webp"
                    />
                  </div>
                  <div>
                    <div className="font-bold">호스트: {product.host.name}</div>
                    <div className="text-xs uppercase opacity-60">
                      호스트 경력 {product.host.experience}년
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="px-4 py-6 gap-4 sm:px-0 text-sm/6 text-gray-70">
              <div className="mb-4 line-clamp-3">{product.description}</div>

              <button
                className="btn"
                onClick={() =>
                  document.getElementById('my_modal_1').showModal()
                }>
                더 보기
              </button>

              <dialog
                id="my_modal_1"
                className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="py-4">{product.description}</p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">확인</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">예약 정보</h2>
            <fieldset className="fieldset border border-base-300 dark:border-gray-100 p-4 rounded-box">
              {/* 체크인 · 체크아웃 */}
              <DateSelector
                stateType="reservation"
                openDate={openDate}
                setOpenDate={setOpenDate}
              />

              {/* 인원수 */}
              <PeopleSelector
                adults={adults}
                setAdults={setAdults}
                stateType="reservation"
                capacity={product.capacity}
              />
            </fieldset>

            <div className="flex items-center justify-between py-2">
              {totalDays(checkIn, checkOut) !== 0 ? (
                <p className="flex gap-2 text-xl font-bold">
                  <span>{formatNumber(product.final_price)}</span>

                  <>
                    <span>X</span> <span>{totalDays(checkIn, checkOut)}박</span>
                  </>
                </p>
              ) : (
                <>총액</>
              )}
              <p className="text-red-500 text-xl font-bold text-right">
                {formatNumber(totalPrice)}원
              </p>
            </div>

            <div className="card-actions justify-end">
              <button
                type="submit"
                onClick={handleReservation}
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
                예약하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
