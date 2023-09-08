export const getTotal = (cart) => {
  let totalAmount = 0;
  let totalCost = 0;
  for (let [item, { amount, price }] of cart) {
    totalAmount += amount;
    totalCost += amount * price;
  }
  return { totalAmount, totalCost };
};
