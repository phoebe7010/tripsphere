import React from 'react';
import { BiCog } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="flex py-6">
      <div className="w-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src="https://tailwindui.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="w-full object-cover"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">김혜란</a>
            </h3>
            <button
              type="button"
              onClick={() => navigate('/profile')}
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
              <BiCog />
            </button>
          </div>
          <p className="mt-1 text-sm text-gray-500">(닉네임)</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
