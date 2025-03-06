import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: '[베스트셀러/W트립]괌 오전출발 5일 두짓비치,전일자유일정진에어항공',
    href: '#',
    color: 'Salmon',
    price: '1,002,000',
    person: 2,
    date: '2025-04-15 출발',
    imageSrc:
      'https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: '[베스트셀러] 방콕/파타야 5일, 추가비용없는 NO옵션,NO가이드경비,요트+차오프라야강 크루즈 탑승',
    href: '#',
    color: 'Blue',
    price: '659,000',
    person: 1,
    date: '2025-04-15 출발',
    imageSrc:
      'https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
];

const ShoppingCart = ({ open, setOpen }) => {
  return (
    <Dialog
      open={open}
      onClose={setOpen}
      className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="fixed inset-0 flex items-center justify-center">
            <DialogPanel
              transition
              className="w-[70%] h-[90%] bg-white shadow-xl rounded-lg transform transition duration-500 ease-in-out">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                      장바구니
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <BiX
                          aria-hidden="true"
                          className="size-6"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="flex flex-wrap gap-4">
                        {products.map(product => (
                          <li
                            key={product.id}
                            className="flex w-[48%] h-auto py-6 border border-gray-200 rounded-lg p-4">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="checkbox checkbox-primary mr-3"
                            />
                            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                className="size-full object-cover"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <h3 className="text-lg font-bold text-gray-900">
                                <a href={product.href}>{product.name}</a>
                              </h3>

                              <div className="flex flex-1 flex-col justify-end">
                                <p className="text-sm text-gray-500">
                                  여행 날짜: {product.date}
                                </p>
                                <p className="text-sm text-gray-500 mt-1">
                                  성인: {product.person}명
                                </p>

                                <div className="mt-4 flex items-center justify-between">
                                  <p className="text-lg font-medium text-gray-900">
                                    {product.price}원
                                  </p>
                                  <button
                                    type="button"
                                    className="font-medium bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-purple-300">
                                    DELETE
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>주문 합계 금액</p>
                    <p>1,661,000원</p>
                  </div>

                  <div className="mt-6">
                    <Link
                      to="/checkout"
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700">
                      주문하기
                    </Link>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ShoppingCart;
