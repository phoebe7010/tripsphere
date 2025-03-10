import React from 'react';
import { Link } from 'react-router-dom';
import { BiHeart, BiCog } from 'react-icons/bi';
import { HiOutlineTicket } from 'react-icons/hi';
import { LiaCoinsSolid } from 'react-icons/lia';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import { BiCalendarAlt, BiUser, BiChevronRight } from 'react-icons/bi';

const breadcrumb = [
  { link: '/', text: '홈' },
  { link: '/mypage', text: '마이페이지' },
];

const MyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="py-[40px] max-w-[700px] mx-auto">
      <PageHeader
        title="마이페이지"
        breadcrumb={breadcrumb}
      />

      {/* 유저 정보 */}
      <div className="flex px-4 mb-8">
        {/* 프로필사진 */}
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>

        {/* 이름 등 정보 */}
        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium ">
              <h3>
                <a href="#">
                  <strong>홍길동</strong>
                </a>
              </h3>
            </div>
            <p className="mt-1 text-sm text-gray-500">길동이님, 안녕하세요.</p>
          </div>
        </div>

        {/* 개인정보 수정 설정 버튼 */}
        <div>
          <button
            type="button"
            onClick={() => navigate('/profile')}
            className="inline-flex items-center  px-2 py-1">
            <BiCog size={30} />
          </button>
          <p className="text-center text-xs">설정</p>
        </div>
      </div>

      {/* stats */}
      <div className="flex divide-x-1 divide-solid divide-gray-300 border-t border-b border-gray-300 ">
        {/* 포인트 박스  */}
        <div className=" flex-1 flex items-center gap-2 justify-around  py-4">
          <div className="flex-none flex gap-2 items-center">
            <LiaCoinsSolid size={30} />
            <div>포인트</div>
          </div>
          <div>
            <strong className="stat-value text-primary">722</strong> 점
          </div>
        </div>

        {/* 주문내역 박스  */}
        <Link
          to="/orderhistory"
          className="flex-1 flex items-center gap-2 justify-around  py-4">
          <div className="flex-none flex gap-2 items-center">
            <HiOutlineTicket size={30} />
            <div>주문 내역</div>
          </div>
          <div className="stat-value text-secondary">3</div>
        </Link>

        {/* 찜내역 박스  */}
        <Link
          to="/favorite"
          className="flex-1 flex items-center gap-2 justify-around  py-4">
          <div className="flex-none flex gap-2 items-center">
            <BiHeart size={30} />
            <div>찜</div>
          </div>

          <div className="stat-value text-accent">25</div>
        </Link>
      </div>

      {/* 포인트 내역 */}
      <ul className="mt-8 list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide flex justify-between">
          <p className="flex items-center gap-2">
            <LiaCoinsSolid /> 포인트 내역
          </p>

          <Link
            to="/favorite"
            className="text-primary font-bold">
            더 보기
          </Link>
        </li>

        <li className="list-row">
          <div>
            <img
              className="size-20 rounded-box"
              src="https://search.pstatic.net/common?src=https://img.tripplat.com/domestic/product/package/63/745afb46c4487cb27af34116d44ca34f/2bc579ebce57266a57247ff884947fe7.jpg&type=f174_174"
            />
          </div>
          <div>
            <div>제주특별자치도 제주시</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              제주도패키지 제주감성 2박3일 아침출발,
              왕복항공티켓+특2급호텔+전일정식사/입장료포함 (No옵션/선택관광)
            </div>
            <div>299,000원</div>
          </div>
        </li>

        <li className="list-row">
          <div>
            <img
              className="size-20 rounded-box"
              src="https://search.pstatic.net/common/?src=%22https%3A%2F%2Fimg.tripplat.com%2Fdomestic%2Fproduct%2Fpackage%2F92%2F39eecb19671866113575816b92ff5ac3%2F14de7183c8784b2b44d7a08bf1ef0a7c.png%22&type=m1500"
            />
          </div>
          <div>
            <div>부산광역시 영도구</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              [KTX/단독 투어+전용 차량/기사/요트] 부산&경주 1박2일 패키지
              (4인이상 예약가능)
            </div>
            <div>414,100원 </div>
          </div>
        </li>

        <li className="list-row">
          <div>
            <img
              className="size-20 rounded-box"
              src="https://search.pstatic.net/common/?src=%22https%3A%2F%2Fimg.tripplat.com%2Fdomestic%2Fproduct%2Fpackage%2F5%2Fb1df43231016311a21c18139bcda6d08%2Fd2071f084774e9d137837f63a757b432.jpg%22&type=m1500"
            />
          </div>
          <div>
            <div>경상남도 양산시</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              진해 벚꽃여행과 부산 1박2일 여행
            </div>
            <div>118,000원</div>
          </div>
        </li>
      </ul>

      {/* 주문 내역  */}
      <ul className="mt-8 list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide flex justify-between">
          <p className="flex items-center gap-2">
            <HiOutlineTicket /> 주문 내역
          </p>

          <Link
            to="/orderhistory"
            className="text-primary font-bold">
            더 보기
          </Link>
        </li>

        <li className="list-row flex-col flex">
          <div className="py-2 border-b border-stone-200 flex justify-between items-center">
            <div>2024년 12월 20일</div>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-6">
              <img
                className="size-20 rounded-box"
                src="https://search.pstatic.net/common?src=https://img.tripplat.com/domestic/product/package/63/745afb46c4487cb27af34116d44ca34f/2bc579ebce57266a57247ff884947fe7.jpg&type=f174_174"
                alt="서울 코리아나호텔"
              />

              <div className="flex flex-col">
                <h2 className="text-md font-bold">서울 코리아나호텔</h2>
                <div className="mb-4 text-xs uppercase opacity-60">
                  예약번호 : 12121212
                </div>

                <div className="flex-col flex gap-[4px] mt-auto">
                  <div className="flex items-center gap-2 text-xs">
                    <BiUser />
                    <div className="mr-1 text-xs">인원수 4</div>
                    <div>(성인: 2명 소아: 2명)</div>
                  </div>

                  <div className="flex items-center gap-10">
                    <div className="flex items-center gap-2 text-xs">
                      <BiCalendarAlt />
                      <span>체크인:</span> <span>2024년 04월 01일</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <BiCalendarAlt />
                      <span>체크아웃:</span> <span>2024년 04월 04일</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>1,200,000원</div>
          </div>
        </li>

        <li className="list-row flex-col flex">
          <div className="py-2 border-b border-stone-200 flex justify-between items-center">
            <div>2024년 12월 20일</div>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-6">
              <img
                className="size-20 rounded-box"
                src="https://search.pstatic.net/common/?src=%22https%3A%2F%2Fimg.tripplat.com%2Fdomestic%2Fproduct%2Fpackage%2F5%2Fb1df43231016311a21c18139bcda6d08%2Fd2071f084774e9d137837f63a757b432.jpg%22&type=m1500"
                alt="서울 코리아나호텔"
              />

              <div className="flex flex-col">
                <h2 className="text-md font-bold">서울 코리아나호텔</h2>
                <div className="mb-4 text-xs uppercase opacity-60">
                  예약번호 : 12121212
                </div>

                <div className="flex-col flex gap-[4px] mt-auto">
                  <div className="flex items-center gap-2 text-xs">
                    <BiUser />
                    <div className="mr-1 text-xs">인원수 4</div>
                    <div>(성인: 2명 소아: 2명)</div>
                  </div>

                  <div className="flex items-center gap-10">
                    <div className="flex items-center gap-2 text-xs">
                      <BiCalendarAlt />
                      <span>체크인:</span> <span>2024년 04월 01일</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <BiCalendarAlt />
                      <span>체크아웃:</span> <span>2024년 04월 04일</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>1,200,000원</div>
          </div>
        </li>

        <li className="list-row flex-col flex">
          <div className="py-2 border-b border-stone-200 flex justify-between items-center">
            <div>2024년 12월 20일</div>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-6">
              <img
                className="size-20 rounded-box"
                src="https://search.pstatic.net/common/?src=%22https%3A%2F%2Fimg.tripplat.com%2Fdomestic%2Fproduct%2Fpackage%2F92%2F39eecb19671866113575816b92ff5ac3%2F14de7183c8784b2b44d7a08bf1ef0a7c.png%22&type=m1500
"
                alt="서울 코리아나호텔"
              />

              <div className="flex flex-col">
                <h2 className="text-md font-bold">서울 코리아나호텔</h2>
                <div className="mb-4 text-xs uppercase opacity-60">
                  예약번호 : 12121212
                </div>

                <div className="flex-col flex gap-[4px] mt-auto">
                  <div className="flex items-center gap-2 text-xs">
                    <BiUser />
                    <div className="mr-1 text-xs">인원수 4</div>
                    <div>(성인: 2명 소아: 2명)</div>
                  </div>

                  <div className="flex items-center gap-10">
                    <div className="flex items-center gap-2 text-xs">
                      <BiCalendarAlt />
                      <span>체크인:</span> <span>2024년 04월 01일</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <BiCalendarAlt />
                      <span>체크아웃:</span> <span>2024년 04월 04일</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>1,200,000원</div>
          </div>
        </li>
      </ul>

      {/* 찜 목록 */}
      <ul className="mt-8 list bg-base-100 rounded-box shadow-md mb-10">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide flex justify-between">
          <p className="flex items-center gap-2">
            <BiHeart /> 찜 목록
          </p>

          <Link
            to="/favorite"
            className="text-primary font-bold">
            더 보기
          </Link>
        </li>

        <li className="list-row flex-col flex">
          <div className="flex justify-between">
            <div className="flex gap-6">
              <img
                className="size-20 rounded-box"
                src="https://search.pstatic.net/common/?src=%22https%3A%2F%2Fimg.tripplat.com%2Fdomestic%2Fproduct%2Fpackage%2F5%2Fb1df43231016311a21c18139bcda6d08%2Fd2071f084774e9d137837f63a757b432.jpg%22&type=m1500"
                alt="서울 코리아나호텔"
              />

              <div className="flex flex-col">
                <h2 className="text-md font-bold mb-2">서울 코리아나호텔</h2>

                <div className="flex gap-2">
                  <div className="badge badge-soft badge-primary text-xs">
                    펜션
                  </div>

                  <div className="badge badge-soft badge-info text-xs">
                    양평군, 경기도
                  </div>
                </div>

                <div className="flex-col flex gap-[4px] mt-auto">
                  <div className="flex items-center gap-10">
                    <div className="flex items-center gap-2 text-xs">
                      <BiCalendarAlt />
                      <span>체크인:</span> <span>2024년 04월 01일</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <BiCalendarAlt />
                      <span>체크아웃:</span> <span>2024년 04월 04일</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>1,200,000원</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MyPage;
