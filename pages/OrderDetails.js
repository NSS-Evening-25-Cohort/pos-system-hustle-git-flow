import renderToDOM from '../utils/renderToDOM';
import clearDom from '../utils/clearDom';

const orderDetails = (obj) => {
  clearDom();
  let domString = `<div><h1>TOTAL:</h1></div>
  <div class="mt-5 d-flex flex-wrap";`;
  let domStringCard = '';
  obj.customerObject.forEach((item) => {
    domStringCard += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.order}</h5>
    <h5 class="card-title">$${item.orderTotal}</h5>
    <a href="#" id="edit-item--${item.firebaseKey}" class="card-link">EDIT</a>
    <a href="#" id="delete-item--${item.firebaseKey}" class="card-link">DELETE</a>
  </div>
</div>`;
  });
  domString += domStringCard;

  renderToDOM('#view', domString);
};

export default orderDetails;
