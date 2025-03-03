import React from 'react';
import { Link } from 'react-router-dom';
import { BiCoin, BiShoppingBag } from 'react-icons/bi';

const State = () => {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-figure text-primary">
          <BiCoin className="inline-block h-8 w-8 stroke-current" />
        </div>
        <div className="stat-title">포인트</div>
        <div className="stat-value text-primary">25.6K</div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      <Link to="/orderhistory">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <BiShoppingBag className="inline-block h-8 w-8 stroke-current" />
          </div>
          <div className="stat-title">주문내역</div>
          <div className="stat-value text-secondary">2.6M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </Link>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
        <div className="stat-value">86%</div>
        <div className="stat-title">Tasks done</div>
        <div className="stat-desc text-secondary">31 tasks remaining</div>
      </div>
    </div>
  );
};

export default State;
