import { BiTv } from 'react-icons/bi';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';
import { IoIosMan } from 'react-icons/io';
import { MdChildCare } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import LiElement from '../../components/order/checkout/ListLiElements';
import PrintOrder from '../../components/order/checkout/PrintOrder';

const receiveData = {
  // 숙박 시설 정보
  accommodations: {
    accommodation_id: '숙소 고유번호',
    name: '숙소 이름',
    type: '숙소 유형',
    loaction: {
      latitude: 123.4512,
      longitude: 123.123,
      place_name: '지역 이름',
    },
    description: '숙소 설명',
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

  return (
    <div className="max-w-[1200px] mx-auto px-[20px] py-[40px]">
      <div className="flex space-y-6 gap-10 py-[30px] max-lg:flex-col max-lg:items-center">
        {/* 주문 결제 정보 */}
        <div className="flex-10/12 max-lg:w-full">
          <div className="px-4 sm:px-0">
            <h3 className="text-base/7 font-semibold text-gray-900">
              주문 결제
            </h3>
            <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
              결제 정보를 확인해 주세요.
            </p>
          </div>

          <div className="mt-6 border-t border-gray-900">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">
                  여행 패키지
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {receiveData.accommodations.name}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">
                  예약 정보
                </dt>
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className="divide-y divide-gray-100 rounded-md border border-gray-200">
                    <LiElement
                      IconComponent={FaMapLocationDot}
                      Title={'여행지'}
                      description={'가평군'}
                    />

                    <LiElement
                      IconComponent={FaRegCalendarAlt}
                      Title={'체크인'}
                      description={receiveData.reservation.check_info.check_in}
                    />
                    <LiElement
                      IconComponent={FaRegCalendarAlt}
                      Title={'체크아웃'}
                      description={receiveData.reservation.check_info.check_out}
                    />
                  </ul>
                </dd>
              </div>

              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                <dt className="text-sm/6 font-medium text-gray-900">
                  예약 인원
                </dt>

                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className="divide-y divide-gray-100 rounded-md border border-gray-200">
                    <li className="flex justify-between items-center py-4 pl-4 pr-4">
                      <div className="flex flex-1 items-center gap-2 ml-4">
                        <span className="text-gray-400">
                          <IoIosMan className="text-2xl" />
                        </span>
                        <span className="font-medium">성인</span>
                      </div>

                      <div className="flex items-center">
                        <button type="button">
                          <CiCircleMinus className="text-3xl text-gray-300 hover:text-gray-500" />
                        </button>
                        <input
                          type="number"
                          className="mx-2 w-10 rounded border border-gray-300 p-1 text-center focus:border-gray-900 focus:outline-none"
                          min="0"
                        />
                        <button type="button">
                          <CiCirclePlus className="text-3xl text-gray-300 hover:text-gray-500" />
                        </button>
                      </div>
                    </li>

                    <li className="flex justify-between items-center py-4 pl-4 pr-4">
                      <div className="flex flex-1 items-center gap-2 ml-4">
                        <span className="text-gray-400">
                          <MdChildCare className="text-2xl" />
                        </span>
                        <span className="font-medium">청소년</span>
                      </div>

                      <div className="flex items-center">
                        <button type="button">
                          <CiCircleMinus className="text-3xl text-gray-300 hover:text-gray-500" />
                        </button>
                        <input
                          type="number"
                          className="mx-2 w-10 rounded border border-gray-300 p-1 text-center focus:border-gray-900 focus:outline-none"
                          min="0"
                        />
                        <button type="button">
                          <CiCirclePlus className="text-3xl text-gray-300 hover:text-gray-500" />
                        </button>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>

              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">
                  숙박 장소
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {receiveData.accommodations.type}
                </dd>
              </div>

              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">
                  호스트 연락처
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {receiveData.accommodations.host.contact}
                </dd>
              </div>

              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">소개</dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {receiveData.accommodations.description}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">서비스</dt>
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
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
