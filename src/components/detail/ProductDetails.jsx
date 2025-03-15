import React, { useMemo, useState } from 'react';
import { formatNumber } from '../../utils/format';
import PeopleSelector from '../../components/common/PeopleSelector';
import { useNavigate } from 'react-router-dom';
import ServiceIcon from '../common/ServiceIcon';
import DateSelector from '../common/DateSelector';
import { BiInfoCircle } from 'react-icons/bi';

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

  const totalPrice = useMemo(() => {
    return adults > 0 ? product.final_price * adults : product.final_price;
  }, [adults, product.final_price]);

  const formattedPrice = `${formatNumber(totalPrice)}원`;

  return (
    <div className="flex space-y-6 gap-10 mt-[30px]">
      <div className="flex-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-2xl font-semibold text-gray-900">
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
            <fieldset className="fieldset border border-base-300 p-4 rounded-box">
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
              />
            </fieldset>

            <div className="flex items-center justify-between py-2">
              <p>주문 금액</p>
              <p className="text-red-500 text-xl font-bold text-right">
                {formattedPrice}
              </p>
            </div>

            <div className="card-actions justify-end">
              <button
                type="submit"
                onClick={() => navigate('/checkout')}
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
                주문하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
