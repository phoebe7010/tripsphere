import React from 'react';
import PageHeader from '../../components/common/PageHeader';

const breadcrumb = [
  { link: '/mypage', text: '마이페이지' },
  { link: '/pointhistory', text: '포인트 내역' },
];

const PointHistory = () => {
  return (
    <div className="max-w-[700px] mx-auto py-[40px]">
      <PageHeader
        title="포인트 내역"
        breadcrumb={breadcrumb}
        hasBackButton={true}
      />

      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="list-row flex-col flex">
          <div className="py-2 border-b border-stone-200 flex justify-between items-center">
            <div>2024년 12월 20일</div>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-6">
              <div className="flex flex-col">
                <h2 className="text-md font-bold">신규 가입 지급 포인트🎉</h2>
                <div className="mb-4 text-xs uppercase opacity-60">
                  신규 가입을 축하드립니다!
                </div>
              </div>
            </div>

            <div className="text-secondary">+10 포인트</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PointHistory;
