import renderToDOM from '../utils/renderToDOM';
import clearDom from '../utils/clearDom';

const orderDetails = (orderObject) => {
  clearDom();

  const items = Object.values(orderObject);
  const itemsHtml = items.map((item) => `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-header">Item: ${item.itemName}</h5>
        <p class="card-text">Price: ${item.itemPrice}</p>
        <!-- Add other item properties as needed -->
      </div>
    </div>
  `).join('');

  const domString = `
    <div class="mt-5 d-flex flex-wrap">
      <h1>Order Details:</h1>
      ${itemsHtml}
      <hr>
      <button type="button" id="add-item" class="btn btn-success">Add Item</button>
      <button type="button" id="paymentPage-btn" class="btn btn-primary">Go to Payment</button>
    </div>
  `;

  renderToDOM('#view', domString);
};

export default orderDetails;
