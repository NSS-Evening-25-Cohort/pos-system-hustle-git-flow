import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const homePage = (user) => {
  clearDom();
  const domString = `<h1>Welcome, ${user.displayName}!</h1>
  <button class="btn btn-success" id="viewOrdersBtn">View Orders</button>
  <button class="btn btn-info" id="createOrderBtn">Create An Order</button>
  <button class="btn btn-warning" id="viewRevenuesBtn">View Revenue</button>`;

  renderToDOM('#view', domString);
};

export default homePage;
