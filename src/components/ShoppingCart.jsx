import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { MdOutlineDeleteForever } from 'react-icons/md';

const products = [
  {
    id: 1,
    name: '페어필드 바이 메리어트 서울',
    href: '#',
    color: 'Salmon',
    price: '1,002,000',
    person: 2,
    checkin: '2025-04-15 ',
    checkout: '2025-04-18',
    imageSrc:
      'https://ak-d.tripcdn.com/images/1mc5s12000ap7p81yFA38_R_600_400_R5.webp',
    address: '서울특별시 영등포구 경인로 870,07306',
  },
  {
    id: 2,
    name: '메종 글래드 제주',
    href: '#',
    color: 'Blue',
    price: '669,000',
    person: 1,
    checkin: '2025-05-05 ',
    checkout: '2025-05-10',
    imageSrc:
      'https://ak-d.tripcdn.com/images/1mc3y12000cemeiq59B00_R_600_400_R5.webp',
    address: '제주특별자치도 제주시 노연로 80, 63132',
  },
];

const ShoppingCart = ({ open, setOpen }) => {
  const totalPrice = products.reduce((acc, product) => {
    return acc + parseInt(product.price.replace(/,/g, ''), 10); // 쉼표 제거 후 숫자로 변환
  }, 0);
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
                            <div className="size-30 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                className="size-full object-cover"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <h3 className="text-lg font-bold text-gray-900 mb-3">
                                <a href={product.href}>{product.name}</a>
                              </h3>

                              <div className="flex flex-1 flex-col justify-end">
                                <p className="text-sm text-gray-500">
                                  체크인: {product.checkin}
                                </p>
                                <p className="text-sm text-gray-500 mt-1">
                                  체크아웃: {product.checkout}
                                </p>
                                <p className="text-sm text-gray-500 mt-1">
                                  성인: {product.person}명
                                </p>
                                <p className="text-sm text-gray-500 mt-1">
                                  주소: {product.address}
                                </p>

                                <div className="mt-4 flex items-center justify-between">
                                  <p className="text-lg font-medium text-gray-900">
                                    {product.price}원
                                  </p>
                                  <button className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-2 py-1  font-medium text-gray-100  hover:bg-indigo-900">
                                    <MdOutlineDeleteForever
                                      size={20}
                                      className="text-white"
                                    />
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
                    <p>{totalPrice.toLocaleString()}원</p>
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
