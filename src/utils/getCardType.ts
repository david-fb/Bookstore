export const getCardType = (number: string) => {
  const cleanedNumber = number.replace(/\D/g, '');
  const cardRules = [
    {
      type: 'visa',
      niceType: 'Visa',
      pattern: /^4[0-9]{12}(?:[0-9]{3})?$/,
      format: [4, 4, 4, 4],
    },
    {
      type: 'mastercard',
      niceType: 'MasterCard',
      pattern: /^5[1-5][0-9]{14}$/,
      format: [4, 4, 4, 4],
    },
    {
      type: 'amex',
      niceType: 'American Express',
      pattern: /^3[47][0-9]{13}$/,
      format: [4, 6, 5],
    },
    {
      type: 'discover',
      niceType: 'Discover',
      pattern: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
      format: [4, 4, 4, 4],
    },
    {
      type: 'diners',
      niceType: 'Diners Club',
      pattern: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
      format: [4, 6, 4],
    },
    {
      type: 'jcb',
      niceType: 'JCB',
      pattern: /^(?:2131|1800|35\d{3})\d{11}$/,
      format: [4, 4, 4, 4],
    },
  ];

  return cardRules.find(rule => rule.pattern.test(cleanedNumber));
};
