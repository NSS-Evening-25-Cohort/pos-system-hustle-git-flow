import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const viewOrders = (array) => {
  clearDom();
  let domString = '';
  array.forEach((item) => {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body1">
      <h5 class="card-header">Order:${item.order}</h5>
      <p class="card-text">Cust Phone:${item.customerPhone}</p>
      <p class="card-text">Cust Email:${item.customerEmail}</p>
      <p class="card-text">Order Type:${item.orderType}</p>
      <a href="#" id="orderdetails--${item.firebaseKey}" class="card-link">details</a>
      <a href="#" id="edit-order--${item.firebaseKey}" class="card-link">Edit</a>
      <a href="#" id="delete-order--${item.firebaseKey}" class="card-link">Delete</a>
    </div>
  </div>`;
  });
  renderToDOM('#store', domString);
};

export default viewOrders;

// import renderToDOM from '../utils/renderToDOM';
// import clearDom from '../utils/clearDom';

// const vieworders = (item) => {
//   clearDom();
//   const domString = `<div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 class="card-title">${item.order}</h5>
//     <h6 class="card-subtitle mb-2 text-body-secondary">${item.orderStatus}</h6>
//     <p class="card-text">${item.customerPhone}</p>
//     <p class="card-text">${item.customerEmail}</p>
//     <p class="card-text">${item.orderType}</p>
//     <a href="#" id="orderDetails_${item.firebaseKey}" class="card-link">details</a>
//     <a href="#" id="editorder_${item.firebaseKey}" class="card-link">edit</a>
//     <a href="#" id="deleteorder_${item.firebaseKey}" class="card-link">delete</a>
// </div>`;

//   renderToDOM('#view', domString);
// };

// export default vieworders;
