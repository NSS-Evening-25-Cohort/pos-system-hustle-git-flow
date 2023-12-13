import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const vieworders = (customer) => {
  clearDom();
  const domString = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${customer.order}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${customer.orderStatus}</h6>
    <p class="card-text">${customer.customerPhone}</p>
    <p class="card-text">${customer.customerEmail}</p>
    <p class="card-text">${customer.orderType}</p>
    <a href="#" id="orderdetails_${customer.firebaseKey}" class="card-link">details</a>
    <a href="#" id="editorder_${customer.firebaseKey}" class="card-link">edit</a>
    <a href="#" id="deleteorder_${customer.firebaseKey}" class="card-link">delete</a>
    
</div>`;

  renderToDOM('#view', domString);
};

export default vieworders;
