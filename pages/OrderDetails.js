import renderToDOM from '../utils/renderToDOM';
import clearDom from '../utils/clearDom';

const orderDetails = (orderDetailsArray) => {
  clearDom();
  let itemString = '';
  orderDetailsArray.forEach((item) => {
    itemString += `<div class="items-card" style="width: 18rem;">
    <div class="items-card-body"> 
      <h5 class="card-title">${item.itemName}</h5>
      <h5 class="card-title">PRICE: ${item.itemPrice}</h5>
      <a href="#" id="edit-item--${item.firebaseKey}" class="card-link">EDIT</a>
      <a href="#" id="delete-item--${item.firebaseKey}" class="card-link">DELETE</a>
    </div>
  </div>`;
  });
  renderToDOM('#store', itemString);
};

export default orderDetails;
