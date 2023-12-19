import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const viewOrders = (array) => {
  clearDom();
  let domString = '';
  array.forEach((item) => {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-header">Order: ${item.order}</h5>
      <p class="card-text">Cust Phone: ${item.customerPhone}</p>
      <p class="card-text">Cust Email: ${item.customerEmail}</p>
      <p class="card-text">Order Type: ${item.orderType}</p>
      <a href="#" id="orderdetails--${item.firebaseKey}" class="card-link">Details</a>
      <a href="#" id="edit-order--${item.firebaseKey}" class="card-link">Edit</a>
      <a href="#" id="delete-order--${item.firebaseKey}" class="card-link">Delete</a>
    </div>
  </div>`;
  });
  renderToDOM('#store', domString);
};

export default viewOrders;
