import React, { useState } from 'react';
import ThemeToggleButton from './ThemeToggleButton';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCart from '../cart/ShoppingCart';
import { BiUser, BiHeart } from 'react-icons/bi';

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleCart = () => {
    setOpen(true);
  };

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-[1200px] mx-auto">
        {/* 로고 */}
        <div className="navbar-start">
          <Link
            to="/"
            className="btn btn-ghost text-xl">
            TRIPSPHERE
          </Link>
        </div>

        {/* 장바구니 컴포넌트 */}
        <ShoppingCart
          open={open}
          setOpen={setOpen}
        />

        <div className="navbar-end">
          <div className="flex items-center gap-2">
            {/* 테마 버튼 */}
            <div className="dropdown dropdown-end">
              <ThemeToggleButton />
            </div>

            {/* 장바구니 버튼 */}
            <div className="dropdown dropdown-end">
              <div
                role="button"
                className="btn btn-ghost btn-circle"
                onClick={toggleCart}>
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
            </div>

            {/* Avatar 드롭다운 */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle fill-current">
                <BiUser className="h-5 w-5" />
              </div>

              {/* Avatar 드롭다운 내용 */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                  <Link to="/mypage">마이페이지</Link>
                </li>
                <li>
                  <Link to="/signin">로그인</Link>
                </li>
                <li>
                  <Link to="/signup">회원가입</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
