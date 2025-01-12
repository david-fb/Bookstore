export const formatCurrency = (value: number,
  locale = 'en-US',
  currency = 'USD',
  minDecimals = 0,
  maxDecimals = 0) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: minDecimals,
    maximumFractionDigits: maxDecimals,
  }).format(value);
};
