import renderToDOM from '../utils/renderToDOM';
import clearDom from '../utils/clearDom';

const orderDetails = (object) => {
  clearDom();

  // Check if object and orderObject are defined

  const domString = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Order: ${object.order}</h5>
      <h5 class="card-title">Order Total: asd</h5>
      <a href="#" id="edit-order-${object.firebaseKey}" class="card-link">Edit</a>
      <a href="#" id="deleteorder-${object.firebaseKey}" class="card-link">Delete</a>
    </div>`;

  // domString += domStringCard;
  renderToDOM('#view', domString);
};

export default orderDetails;
