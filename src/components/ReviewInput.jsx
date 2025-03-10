import React, { useState } from 'react';

const ReviewInput = () => {
  const [review, setReview] = useState('');

  return (
    <fieldset className="flex flex-col gap-4 p-5 border rounded-xl mb-10 border-gray-200">
      <textarea
        className="textarea h-28 p-3 border rounded-lg resize-none w-full text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 transition-all"
        placeholder="리뷰를 작성해 주세요."
        value={review}
        onChange={e => setReview(e.target.value)}></textarea>

      <button
        type="submit"
        onClick={() => alert('리뷰가 전송되었습니다.')}
        disabled={!review.trim()}
        className={`self-end rounded-lg px-6 py-2 font-medium transition-all focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
        ${
          review.trim()
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}>
        전송
      </button>
    </fieldset>
  );
};

export default ReviewInput;
