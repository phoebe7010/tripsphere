import { BiTv, BiMap } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { BiShareAlt, BiCart, BiHeart } from 'react-icons/bi';
import KakaoMap from '../../components/KakaoMap';

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

const ProductDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1200px] mx-auto px-[20px] py-[40px]">
      {/* 상품 헤더 */}
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight">
            양평 독채 풀빌라 스테이호은
          </h2>
        </div>

        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
              <BiShareAlt
                aria-hidden="true"
                className="mr-1.5 -ml-0.5 size-5 text-gray-400"
              />
              공유하기
            </button>
          </span>

          <span className="ml-3 hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
              <BiCart
                aria-hidden="true"
                className="mr-1.5 -ml-0.5 size-5 text-gray-400"
              />
              장바구니
            </button>
          </span>

          <span className="ml-3 hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
              <BiHeart
                aria-hidden="true"
                className="mr-1.5 -ml-0.5 size-5 text-gray-400"
              />
              찜하기
            </button>
          </span>
        </div>
      </div>

      <div>
        <div className="pt-6">
          {/* 이미지 갤러리*/}
          <div className="mx-auto mt-6 max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-2">
            <img
              alt={product.images[0].alt}
              src={product.images[0].src}
              className="hidden size-full rounded-l-lg object-cover lg:block"
            />
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-2">
              <img
                alt={product.images[1].alt}
                src={product.images[1].src}
                className="aspect-3/2 w-full object-cover"
              />
              <img
                alt={product.images[2].alt}
                src={product.images[2].src}
                className="aspect-3/2 w-full object-cover"
              />
            </div>
            <img
              alt={product.images[3].alt}
              src={product.images[3].src}
              className="aspect-4/5 size-full object-cover sm:rounded-r-lg lg:aspect-auto"
            />
          </div>
        </div>
      </div>

      {/* 상품 상세 정보 */}
      <div className="flex space-y-6 gap-10 mt-[30px]">
        <div className="flex-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-base/7 font-semibold text-gray-900">
              양평군, 한국의 별장 전체
            </h3>
            <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
              최대 인원 8명침실 2개침대 2개욕실 2개
            </p>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <div className="divide-y divide-gray-100">
              <div className="px-4 py-6 gap-4 sm:px-0 text-sm/6 text-gray-70">
                <ul
                  role="list"
                  className="grid grid-cols-2 divide-y divide-gray-100 rounded-md border border-gray-200">
                  <div className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                    <div className="flex w-0 flex-1 items-center">
                      <div className="ml-4 flex min-w-0 flex-1 gap-2 items-center">
                        <span className="shrink-0 text-gray-400">
                          <BiTv className="text-xl" />
                        </span>
                        <span className="truncate font-medium">
                          최고의 전망
                        </span>
                      </div>
                    </div>
                  </div>
                  <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                    <div className="flex w-0 flex-1 items-center">
                      <div className="ml-4 flex min-w-0 flex-1 gap-2 items-center">
                        <span className="shrink-0 text-gray-400">
                          <BiMap className="text-xl" />
                        </span>
                        <span className="truncate font-medium">
                          최고의 위치
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                    <div className="flex w-0 flex-1 items-center">
                      <div className="ml-4 flex min-w-0 flex-1 gap-2 items-center">
                        <span className="shrink-0 text-gray-400">
                          <BiMap className="text-xl" />
                        </span>
                        <span className="truncate font-medium">
                          최고의 위치
                        </span>
                      </div>
                    </div>
                  </li>
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
                      <div className="font-bold">호스트: 홍길동</div>
                      <div className="text-xs uppercase opacity-60">
                        호스트 경력 3년
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="px-4 py-6 gap-4 sm:px-0 text-sm/6 text-gray-70">
                <div className="mb-4 line-clamp-3">
                  예약 전 숙소 이용 안내 및 이용 수칙을 반드시 읽어주세요.
                  "일상에서 벗어난 단 하루, 나만의 은신처에서 온전한 휴식을…"
                  '호젓한 은신처'를 의미하는 '호은'. 예약 전 숙소 이용 안내 및
                  이용 수칙을 반드시 읽어주세요. "일상에서 벗어난 단 하루,
                  나만의 은신처에서 온전한 휴식을…" '호젓한 은신처'를 의미하는
                  '호은'.
                </div>

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
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">
                      Press ESC key or click the button below to close
                    </p>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn">Close</button>
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
              <h2 className="card-title">Card title!</h2>
              <fieldset className="fieldset bg-base-200 border border-base-300 p-4 rounded-box">
                <label className="fieldset-label">체크인</label>
                <input
                  type="date"
                  className="input"
                />

                <label className="fieldset-label">체크아웃</label>
                <input
                  type="date"
                  className="input"
                />

                <label className="fieldset-label">인원</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Name"
                />
              </fieldset>
              <div className="card-actions justify-end">
                <button
                  type="submit"
                  onClick={() => navigate('/checkout')}
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
                  주문하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 위치 */}
      <div>
        <div className="flex space-y-6 gap-10 max-w-[1200px] mx-auto py-[20px] px-[20px]">
          <div className="w-full">
            <div className="px-4 sm:px-0">
              <h3 className="text-base/7 font-semibold text-gray-900">위치</h3>
              <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
                양평군, 경기도, 한국
              </p>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <div className="divide-y divide-gray-100">
                <div className="py-4">
                  <KakaoMap />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
