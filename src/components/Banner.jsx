import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)',
      }}>
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            TRIPSHERE와 함께 여행 예약해요
          </h1>
          <p className="mb-5">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">지역</legend>
              <select
                defaultValue="어디에 메물고 싶으세요?"
                className="select">
                <option disabled={true}>어디에 메물고 싶으세요?</option>
                <option>Chrome</option>
                <option>FireFox</option>
                <option>Safari</option>
              </select>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">객실 종류</legend>
              <select
                defaultValue="객실을 선택하세요."
                className="select">
                <option disabled={true}>객실을 선택하세요.</option>
                <option>Chrome</option>
                <option>FireFox</option>
                <option>Safari</option>
              </select>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">뷰 종류</legend>
              <select
                defaultValue="뷰를 선택하세요."
                className="select">
                <option disabled={true}>뷰를 선택하세요.</option>
                <option>Chrome</option>
                <option>FireFox</option>
                <option>Safari</option>
              </select>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">숙박당 요금</legend>
              <select
                defaultValue="뷰를 선택하세요."
                className="select">
                <option disabled={true}>모든 가격</option>
                <option>Chrome</option>
                <option>FireFox</option>
                <option>Safari</option>
              </select>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">인원 수</legend>
              <select
                defaultValue="뷰를 선택하세요."
                className="select">
                <option disabled={true}>모든 가격</option>
                <option>Chrome</option>
                <option>FireFox</option>
                <option>Safari</option>
              </select>
            </fieldset>
          </p>
          <button
            className="btn btn-primary"
            onClick={() => navigate('/products')}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
