import React, { useEffect } from 'react';
import Rating from '../common/Rating';
import { formatDate } from '../../utils/format';

const ReviewItem = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <div>리뷰가 없습니다.</div>;
  }

  return (
    <>
      {reviews?.map((review, index) => (
        <li
          key={index}
          className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              src={review.userInfo.profile_image}
              alt={review.userInfo.nickname}
            />
          </div>

          <div>
            <div>{review.userInfo.nickname}</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              {formatDate(review.created_at)}
            </div>
          </div>

          <p className="list-col-wrap text-xs">{review.comment}</p>

          <Rating
            rating={review.rating}
            readOnly={true}
          />
        </li>
      ))}
    </>
  );
};

export default ReviewItem;
