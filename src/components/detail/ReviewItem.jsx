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
              src={review.image}
              alt={review.name}
            />
          </div>
          <div>
            <div>{review.name}</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              {review.date}
            </div>
          </div>
          <p className="list-col-wrap text-xs">{review.review}</p>
          <Rating />
        </li>
      ))}
    </>
  );
};

export default ReviewItem;
