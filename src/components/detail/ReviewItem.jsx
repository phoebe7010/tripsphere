import React from 'react';
import Rating from '../common/Rating';

const ReviewItem = ({ reviews }) => {
  return (
    <>
      {reviews.map(review => (
        <li
          key={review.id}
          className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              src={review.user_info.profile_image}
              alt={review.user_info.name}
            />
          </div>

          <div>
            <div>{review.user_info.name}</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              {review.created_at}
            </div>
          </div>

          <p className="list-col-wrap text-xs">{review.comment}</p>

          <Rating />
        </li>
      ))}
    </>
  );
};

export default ReviewItem;
