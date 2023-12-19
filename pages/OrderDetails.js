import renderToDOM from '../utils/renderToDOM';
import clearDom from '../utils/clearDom';

const orderDetails = (obj) => {
  clearDom();

  const domString = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-header">Order: ${obj.order}</h5>
      <p class="card-text">Cust Phone: ${obj.customerPhone}</p>
      <a href="#" id="edit-item--${obj.firebaseKey}" class="card-link">Edit</a>
      <a href="#" id="delete-item--${obj.firebaseKey}" class="card-link">Delete</a>
    </div>
  </div>
  <div><h1>TOTAL:</h1></div>
  <div class="mt-5 d-flex flex-wrap">
  <hr>
  <button type="button" id="add-item" class="btn btn-success">Add Item</button>
  <button type="button" id="paymentPage-btn" class="btn btn-primary">Go to Payment</button>
  </div>`;

  renderToDOM('#view', domString);
};

export default orderDetails;
