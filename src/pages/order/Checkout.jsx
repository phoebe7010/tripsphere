import { useState } from 'react';
import { BiHotel, BiTv } from 'react-icons/bi';
import { FaMapLocationDot } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import DateSelector from '../../components/DateSelector';
import KakaoMap from '../../components/KakaoMap';
import LiElement from '../../components/order/checkout/ListLiElements';
import PrintOrder from '../../components/order/checkout/PrintOrder';
import PeopleSelector from '../../components/PeopleSelector';

const receiveData = {
  // 숙박 시설 정보
  accommodations: {
    accommodation_id: '숙소 고유번호',
    name: '양평 독채 풀빌라 스테이호은',
    type: '호텔',
    loaction: {
      latitude: 123.4512,
      longitude: 123.123,
      place_name: '양평군',
    },
    description:
      "예약 전 숙소 이용 안내 및 이용 수칙을 반드시 읽어주세요. '호젓한 은신처'를 의미하는 '호은'.",
    original_price: 100000,
    discount_rate: 5,
    final_price: 0,
    check_in: '체크인시간',
    check_out: '체크아웃시간',
    capacity: {
      adults: 2,
      children: 2,
    },
    service: ['제공 서비스1', '제공 서비스2', '제공 서비스3'],
    images: ['https://imgur.com/a/PpgWsfW', 'https://imgur.com/a/r6B59wX'],
    host: {
      name: '숙박 사업주명',
      experience: '숙박 사업주 경력 기술',
      contact: '010-0000-0000',
    },
    rating: 3,
    revicews_count: 3,
  },
  // 사용자 정보
  user: {
    uid: 'user_123',
    name: '유저명',
    email: '유저이메일',
    phone: '유저연락처',
    points: 1000000,
  },
  // 예약정보
  reservation: {
    check_info: {
      check_in: '20260101',
      check_out: '20260103',
      check_range: 3,
    },
    guest_info: {
      adult: 2,
      children: 2,
      guest_total: 4,
    },
    order_info: {
      order_price: 120000,
      order_fee: 40000,
      order_total: 160000,
    },
  },
};

const orderData = {
  uid: 'user_123',
  accommodation_id: '숙소 고유번호',
  check_in: '20260101',
  check_out: '20260103',
  guest_count: {
    adults: 2,
    children: 2,
  },

  total_price: 100000,
  payment_state: 'completed',
  order_data: '20250309',
  used_points: 0,
};

const Checkout = () => {
  const navigate = useNavigate();
  const [openDate, setOpenDate] = useState(false);

  return (
    <div className="max-w-[1200px] mx-auto px-[20px] py-[40px] dark:text-gray-200">
      <div className="flex space-y-6 gap-10 py-[30px] max-lg:flex-col max-lg:items-center">
        {/* 주문 결제 정보 */}
        <div className="flex-10/12 max-lg:w-full">
          <div className="px-4 sm:px-0">
            <h3 className="text-base/7 font-semibold">주문 결제</h3>
            <p className="mt-1 max-w-2xl text-sm/6 text-gray-500 dark:text-gray-400">
              결제 정보를 확인해 주세요.
            </p>
          </div>

          <div className="mt-6 border-t ">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium">여행 패키지</dt>
                <dd className="mt-1 text-sm/6  sm:col-span-2 sm:mt-0">
                  {receiveData.accommodations.name}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium ">예약 정보</dt>
                <dd className="mt-2 text-sm sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className="divide-y divide-gray-200 rounded-md border border-gray-200">
                    <LiElement
                      IconComponent={FaMapLocationDot}
                      Title={'숙소 위치'}
                      description={
                        receiveData.accommodations.loaction.place_name
                      }
                    />
                    <div className="border-t border-gray-100 h-">
                      <div className="divide-y divide-gray-100">
                        <KakaoMap />
                      </div>
                    </div>

                    <LiElement
                      IconComponent={BiHotel}
                      Title={'숙박 시설'}
                      description={receiveData.accommodations.type}
                    />

                    <li>
                      <fieldset className="fieldset py-4 px-6">
                        <DateSelector
                          openDate={openDate}
                          setOpenDate={setOpenDate}
                        />

                        <PeopleSelector />
                      </fieldset>
                    </li>
                  </ul>
                </dd>
              </div>

              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                <dt className="text-sm/6 font-medium">호스트 연락처</dt>
                <dd className="mt-1 text-sm/6 sm:col-span-2 sm:mt-0">
                  {receiveData.accommodations.host.contact}
                </dd>
              </div>

              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium ">숙소 소개</dt>
                <dd className="mt-1 text-sm/6 sm:col-span-2 sm:mt-0">
                  {receiveData.accommodations.description}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium">서비스</dt>
                <dd className="mt-2 text-sm sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className="divide-y divide-gray-100 rounded-md border border-gray-200">
                    {receiveData.accommodations.service &&
                      receiveData.accommodations.service.map((ele, index) => (
                        <LiElement
                          key={index}
                          IconComponent={BiTv}
                          Title={ele}
                          description={''}
                        />
                      ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* 최종 결제 금액 */}
        <div className="">
          <div className="sticky card top-15 bg-base-100 w-96 shadow-sm">
            <form className="card-body">
              <PrintOrder receiveData={receiveData} />

              <div className="card-actions justify-end">
                <button
                  type="submit"
                  onClick={() => navigate('/orderconfirmation')}
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
                  결제하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
