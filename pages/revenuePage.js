import { getOrderTotal } from '../api/orderData';
import revenueSum from '../utils/calculator';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const revenuePage = () => {
  getOrderTotal().then((rev) => revenueSum(rev));
  console.warn('value');
  clearDom();
  const domString = `
    <h1>Revenue: $</h1>
  `;

  renderToDOM('#store', domString);
};

export default revenuePage;
