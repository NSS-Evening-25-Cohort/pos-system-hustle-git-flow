import renderToDOM from '../utils/renderToDOM';
import clearDom from '../utils/clearDom';

const orderdetails = (item) => {
  clearDom();
  const domString = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <h5 class="card-title">${item.price}</h5>
    <a href="#" id="editorder ${item.firebaseKey}"class="card-link">edit</a>
    <a href="#" id="deleteorder ${item.firebaseKey}"class="card-link">delete</a>
  </div>
</div>`;

  renderToDOM('#view', domString);
};

export default orderdetails;
