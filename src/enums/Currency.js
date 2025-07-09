export const Currency = {
  USD: { value: 0, label: 'USD' },
  EUR: { value: 1, label: 'EUR' },
  PLN: { value: 2, label: 'PLN' },
};

export const getCurrencyLabel = (value) => {
  const currency = Object.values(Currency).find((c) => c.value === value);
  return currency ? currency.label : 'Unknown';
};

export const getCurrencyOptions = () => Object.values(Currency);