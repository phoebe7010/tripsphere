export const calculateDiscountedPrice = (totalPrice, discount) => {
  if (!totalPrice || !discount) return totalPrice;
  return totalPrice - (totalPrice * discount) / 100;
};
