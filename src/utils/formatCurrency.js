
export const formatCurrency = (amount, currency = 'USD') => {
  const options = { style: 'currency', currency }
  const numberFormated = new Intl.NumberFormat('en-US', options);

  return numberFormated.format(amount);
}