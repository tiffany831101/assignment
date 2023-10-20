const formatDollars = (amount) => {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
  }).format(amount);
  return `$${formattedAmount}`;
};

const getNumber = (amount) => parseFloat(amount.replace(/[$,]/g, ""));

const changeRate = (amount, rate) => {
  let result = getNumber(amount) * rate;
  result = Math.round(result * 100) / 100;
  return formatDollars(result);
};

module.exports = {
  changeRate,
  getNumber,
  formatDollars,
};
