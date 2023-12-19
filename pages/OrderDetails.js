import renderToDOM from '../utils/renderToDOM';
import clearDom from '../utils/clearDom';

const orderDetails = (obj) => {
  clearDom();
  let total = '';

  if (obj && obj.orderObject && Array.isArray(obj.orderObject)) {
    obj.orderObject.forEach((item) => {
      total += (item.itemPrice);
    });
  } else {
    console.error('Invalid input: obj must be an object with an orderObject array.');
    return;
  }

  let domString = `<div><h1>TOTAL:${total}</h1></div>
  <div class="mt-5 d-flex flex-wrap">
  <hr>
  <button type="button" id="add-item-btn" class="btn btn-success">Add Item</button>
  <button type="button" id="paymentPage-btn" class="btn btn-primary">Go to Payment</button>
  </div>`;
  let domStringCard = '';
  console.warn(obj);
  console.warn(obj.orderObject);
  obj.orderObject.forEach((item) => {
    domStringCard += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.itemName}</h5>
      <h5 class="card-title">${item.itemPrice}</h5>
      <a href="#" id="edit-item--${item.firebaseKey}" class="card-link">EDIT</a>
      <a href="#" id="delete-item--${item.firebaseKey}" class="card-link">DELETE</a>
    </div>
  </div>`;
  });
  domString += domStringCard;
  renderToDOM('#view', domString);
};

export default orderDetails;
