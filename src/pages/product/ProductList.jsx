import { useState } from 'react';
import {
  BiCart,
  BiChevronLeft,
  BiChevronRight,
  BiHeart,
  BiShareAlt,
} from 'react-icons/bi';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineX } from 'react-icons/hi';
import { IoIosMan, IoMdTime } from 'react-icons/io';
import { MdChildCare } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Aside from './ProductListCompo/aside';

const ProductList = () => {
  const [isOnPannel, setIsOnPannel] = useState(false);

  return (
    <div>
      <div className="max-w-[1200px] mx-auto py-[20px] px-[20px] mb-[30px]">
        <nav className="mb-[30px]">
          <Link to="/">Home</Link> &gt;&gt; Search
        </nav>
        <div
          title="검색결과"
          className="text-6xl">
          여행 패키지 검색 결과
        </div>
      </div>

      <div
        className="fixed z-10 bg-white left-3 top-20 w-[5rem] h-[5rem] border-2
       p-2 cursor-pointer flex justify-center items-center rounded-2xl"
        onClick={() => {
          setIsOnPannel(!isOnPannel);
        }}>
        {!isOnPannel && <GiHamburgerMenu className="text-5xl" />}
        {isOnPannel && <HiOutlineX className="text-5xl" />}
      </div>

      {/* 검색 옵션 패널 */}
      {isOnPannel && <Aside />}

      {/* 본문 : 상품페이지 (여행패키지) + 페이지네이션 목록 */}
      <main className="max-w-[1200px] mx-auto py-[20px] px-[20px]">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> */}
        {/* 상품 (여행패키지) 페이지 */}
        <section
          className="flex flex-col gap-y-[1rem]"
          // style={{ display: 'flex', flexDirection: 'column', rowGap: '2rem' }}
        >
          {[1, 2, 3, 4, 5, 6].map(() => (
            <Link to="/product/0">
              {/* 각 여행패키지 정보*/}
              <article className="group card bg-base-100 hover:shadow-xl transition-shadow shadow-sm w-full grid grid-cols-[2fr_5fr]">
                {/* 패키지 사진 영역*/}
                <figure className="p-2.5">
                  <div className="h-full overflow-hidden relative">
                    <div className="badge badge-secondary absolute top-2.5 left-2.5 group-hover:shadow-xl transition-shadow shadow-sm">
                      NEW
                    </div>
                    <img
                      src="https://i.ibb.co/JjbW5yMn/andrew-ruiz-fmz-B9-At9i-Q-unsplash-1024x357.jpg"
                      alt=""
                      className="h-full object-cover rounded-md"
                    />
                  </div>
                  {/* <figcaption>여행 패키지 상품 사진</figcaption> */}
                </figure>

                <div className="card-body flex flex-col">
                  {/* 패키지 이름 */}
                  <h2
                    className="group-hover:text-amber-500 transition-colors card-title text-5xl pb-3.5 border-b-4 border-gray-200"
                    title="여행 패키지 이름">
                    Trip Package Name Here
                  </h2>

                  {/* 패키지 정보 */}
                  <div
                    className="grid grid-cols-[3fr_1fr] h-4/5 "
                    title="패키지 상세정보들">
                    <div>
                      <div className="flex gap-x-1  items-center">
                        <FaMapLocationDot className="text-base" />
                        <span className="font-bold">장소</span>{' '}
                        <span>대한민국</span>{' '}
                      </div>
                      <div
                        title="일정"
                        className="flex flex-col mb-2.5">
                        <div className="flex gap-2.5">
                          <div
                            title="startTime"
                            className="flex gap-1 items-center">
                            <FaRegCalendarAlt className="text-base" />
                            <p className="font-bold">시작일자</p>
                            <time dateTime="2025-04-01">2025-04-01</time>
                          </div>

                          <div
                            title="endTime"
                            className="flex gap-1 items-center">
                            <FaRegCalendarAlt className="text-base" />
                            <p className="font-bold">종료일자</p>
                            <time dateTime="2025-04-03">2025-04-03</time>
                          </div>
                        </div>
                        <div>
                          <div className="flex gap-1 items-center">
                            <IoMdTime className="text-base" />
                            <span className="font-bold">총 소요 일 수 </span>
                            <span>3일</span>
                          </div>
                        </div>
                      </div>

                      <p
                        className=""
                        title="패키지 설명">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Assumenda, maiores nam, officiis earum id, perspiciatis
                        inventore beatae eligendi tempore deleniti quos
                        repudiandae eius ipsam ex. Quam animi qui atque dolor.
                      </p>
                    </div>
                    <div
                      className="flex flex-col border-l-2 pl-2.5 border-l-gray-200"
                      title="여행 패키지 정보">
                      {/* 가격정보 */}
                      <div
                        title="가격정보"
                        className="flex flex-col justify-around items-start">
                        <div title="가격할인">
                          <p
                            className="line-through text-red-600"
                            title="정가">
                            500000\
                          </p>
                          <p
                            className="underline font-bold text-3xl group-hover:text-amber-500 transition-colors"
                            title="할인가">
                            300000\
                          </p>
                        </div>
                        <span> -40% </span>
                      </div>

                      {/* 참여 가능인원 */}
                      <div className="flex flex-col items-end">
                        <span>잔여 티켓</span>
                        <div className="flex gap-x-1 items-center">
                          <span>
                            <IoIosMan className="text-base" />
                          </span>
                          <span>성인 :</span>
                          <span>15명</span>
                        </div>
                        <div className="flex gap-x-1 items-center">
                          <span>
                            <MdChildCare className="text-base" />
                          </span>
                          <span>청소년 : </span>
                          <span>15명</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 소셜미디어 연결 */}
                  <div
                    className="card-actions justify-end"
                    // style={{ height: '20%' }}
                  >
                    <span className="hidden sm:block">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                        <BiShareAlt
                          aria-hidden="true"
                          className="size-5 text-gray-400"
                        />
                      </button>
                    </span>

                    <span className="hidden sm:block">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                        <BiCart
                          aria-hidden="true"
                          className="size-5 text-gray-400"
                        />
                      </button>
                    </span>

                    <span className="hidden sm:block">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                        <BiHeart
                          aria-hidden="true"
                          className="size-5 text-gray-400"
                        />
                      </button>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </section>

        {/* 페이지네이션 */}
        <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{' '}
                <span className="font-medium">10</span> of{' '}
                <span className="font-medium">97</span> results
              </p>
            </div>
            <div>
              <nav
                aria-label="Pagination"
                className="isolate inline-flex -space-x-px rounded-md shadow-xs">
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  <span className="sr-only">Previous</span>
                  <BiChevronLeft
                    aria-hidden="true"
                    className="size-5"
                  />
                </a>
                {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  2
                </a>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0">
                  ...
                </span>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">
                  8
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  9
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  10
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  <span className="sr-only">Next</span>
                  <BiChevronRight
                    aria-hidden="true"
                    className="size-5"
                  />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductList;
