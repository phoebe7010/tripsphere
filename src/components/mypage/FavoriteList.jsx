import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiHeart, BiCalendarAlt } from 'react-icons/bi';
import { formatDate, formatNumber } from '../../utils/format';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import { useFavoriteAccommData } from '../../hooks/useFavoriteData';

const typeMapping = {
  pension: '펜션',
  hotel: '호텔',
  camping: '캠핑',
};

const FavoriteList = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Firebase 인증 상태가 변경될 때마다 호출
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // 컴포넌트가 언마운트될 때 리스너를 정리
    return () => unsubscribe();
  }, []);

  const { data, isLoading, error } = useFavoriteAccommData(user?.uid);

  useEffect(() => {
    if (data) {
      //console.log('찜 목록 내역:', JSON.stringify(data));
    }
  }, [data]);

  if (isLoading) return <>로딩 중..</>;
  if (error) return <>오류</>;

  return (
    <div>
      <div className="my-8 p-4 pb-2 text-xs opacity-60 tracking-wide flex justify-between">
        <h3 className="flex items-center gap-2 font-bold text-xl">
          <BiHeart size={20} /> 찜 목록
        </h3>

        <Link
          to="/favorite"
          className="text-primary font-bold">
          더 보기
        </Link>
      </div>

      <ul className="mt-8 list bg-base-100 rounded-box shadow-md mb-10">
        {data &&
          data.map((favorite, index) => (
            <li
              key={index}
              className="list-row flex-col flex">
              <div className="flex justify-between">
                <div className="flex gap-6">
                  <img
                    className="size-20 rounded-box"
                    src={favorite.images[1]}
                    alt={favorite.name}
                  />

                  <div className="flex flex-col">
                    <h4 className="text-md font-bold mb-2">{favorite.name}</h4>
                    <div className="flex gap-2">
                      <div className="badge badge-soft badge-primary text-xs">
                        {typeMapping[favorite.type]}
                      </div>
                      <div className="badge badge-soft badge-info text-xs">
                        {favorite.location.place_name}
                      </div>
                    </div>

                    <div className="flex-col flex gap-[4px] mt-auto">
                      <div className="flex items-center gap-10">
                        <div className="flex items-center gap-2 text-xs">
                          <BiCalendarAlt />
                          <span>체크인:</span>
                          <span>{formatDate(favorite.check_in)}</span>
                        </div>

                        <div className="flex items-center gap-2 text-xs">
                          <BiCalendarAlt />
                          <span>체크아웃:</span>
                          <span>{formatDate(favorite.check_out)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>{formatNumber(favorite.final_price)}원</div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FavoriteList;
