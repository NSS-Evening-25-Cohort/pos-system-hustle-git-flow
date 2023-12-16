import renderToDOM from '../utils/renderToDOM';
import clearDom from '../utils/clearDom';

const orderdetails = (object) => {
  clearDom();

  // Check if object and orderObject are defined
  if (!object || !object.orderObject) {
    console.error('Invalid input. Expected an object with orderObject property.');
    return;
  }

  const domString = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Order: ${object.order}</h5>
      <h5 class="card-title">Order Total: ${object.orderObject.orderTotal}</h5>
      <a href="#" id="editorder-${object.firebaseKey}" class="card-link">Edit</a>
      <a href="#" id="deleteorder-${object.firebaseKey}" class="card-link">Delete</a>
    </div>
  </div>`;

  renderToDOM('#view', domString);
};

export default orderdetails;
