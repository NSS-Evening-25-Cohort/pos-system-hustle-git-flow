import renderToDOM from '../utils/renderToDOM';
import clearDom from '../utils/clearDom';

const homePage = (user) => {
  clearDom();
  const domString = `<h1>Welcome ${user.displayName}!</h1>
  <div class="button-container">
  <div class="container" id="homePageBtns">
  <button class="btn btn-success" href="pages/ViewOrders" id="viewOrdersBtn">View Orders</button>
  <button class="btn btn-info" id="createOrderBtn">Create An Order</button>
  <button class="btn btn-warning" id="viewRevenuesBtn">View Revenue</button>`;

  renderToDOM('#view', domString);
};

export default homePage;
