// At the top of your component or in a utils file
export const formatToTwoDecimals = (value) => {
  if (value === undefined || value === null) return '0.00';
  return Number(value).toFixed(2);
};

