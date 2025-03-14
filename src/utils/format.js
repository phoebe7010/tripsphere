// 숫자 3자리마다 콤마를 추가
export const formatNumber = (input) => {
  const number = Number(input);

  if (isNaN(number)) {
    return '';
  }

  return number.toLocaleString();
};

// timestamp 날짜 포맷
export const formatDate = (timestamp) => {
  if (!timestamp || !timestamp.seconds) {
    return '';
  }

  // seconds를 밀리초로 변환
  const date = new Date(timestamp.seconds * 1000);

  if (isNaN(date.getTime())) {
    return '';
  }

  // 연도, 월, 일 추출
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
};

// MM:SS 형식으로 시간 포맷
export const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};
