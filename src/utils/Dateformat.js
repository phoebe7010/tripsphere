export const formatDate = input => {
  const number = Number(input);

  if (isNaN(number)) {
    return '올바른 시간유형이 아닙니다. 유형 : 24시간표기법 ( 시분:hhmm:4자릿수)';
  }

  return number.toLocaleString();
};
