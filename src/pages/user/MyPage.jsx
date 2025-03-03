import React from 'react';
import State from '../../components/State';
import UserProfile from '../../components/UserProfile';

const MyPage = () => {
  return (
    <div className="max-w-[700px] mx-auto">
      <UserProfile />
      <State />
    </div>
  );
};

export default MyPage;
