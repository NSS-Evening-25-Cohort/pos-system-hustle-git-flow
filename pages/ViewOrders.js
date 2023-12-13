import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const vieworders = (order) => {
  clearDom();
  const domString = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${order.name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${order.status}</h6>
    <p class="card-text">${order.phone}</p>
    <p class="card-text">${order.email}</p>
    <p class="card-text">${order.type}</p>
    <a href="#" id="orderdetails ${order.firebaseKey}" class="card-link">details</a>
    <a href="#" id="editorder ${order.firebaseKey}"class="card-link">edit</a>
    <a href="#" id="deleteorder ${order.firebaseKey}"class="card-link">delete</a>
  </div>
</div>`;

  renderToDOM('#view', domString);
};

export default vieworders;
