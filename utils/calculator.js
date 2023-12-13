const initialValue = 0;
const revenueObj = [];
const revenueSum = revenueObj.reduce((accumulator, curValue) => accumulator + curValue.n, initialValue);

export default revenueSum;
