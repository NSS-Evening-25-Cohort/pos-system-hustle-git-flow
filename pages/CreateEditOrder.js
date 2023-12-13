import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const createEditOrder = (user) => {
  clearDom();
  const domString = `<h1>Welcome ${user.displayName}!</h1>
  <div class="button-container">
  <div class="container" id="createEditItem">
  <button class="btn btn-success" id="viewOrdersBtn">View Orders</button>
  <button class="btn btn-info" id="createOrderBtn">Create An Order</button>
  <button class="btn btn-warning" id="viewRevenuesBtn">View Revenue</button>`;

  renderToDOM('#view', domString);
};

export default createEditOrder;
