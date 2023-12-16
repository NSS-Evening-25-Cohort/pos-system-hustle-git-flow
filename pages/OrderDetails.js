import renderToDOM from '../utils/renderToDOM';
import clearDom from '../utils/clearDom';

const orderDetails = (item) => {
  clearDom();
  const domString = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <h5 class="card-title">${item.price}</h5>
    <a href="#" id="edit-item--${item.firebaseKey}"class="card-link">EDIT</a>
    <a href="#" id="delete-item--${item.firebaseKey}"class="card-link">DELETE</a>
  </div>
</div>`;

  renderToDOM('#view', domString);
};

export default orderDetails;
