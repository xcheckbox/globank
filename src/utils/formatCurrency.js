
export const formatCurrency = (amount, currency = 'USD') => {
  if (isNaN(amount)) return amount;

  const options = { style: 'currency', currency }
  const numberFormated = new Intl.NumberFormat('en-US', options);

  return numberFormated.format(amount);
}