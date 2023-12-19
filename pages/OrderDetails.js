import renderToDOM from '../utils/renderToDOM';
import clearDom from '../utils/clearDom';

const orderDetails = (itemObject) => {
  clearDom();

  let domString = '';
  domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${itemObject.itemName}</h5>
      <h5 class="card-title">${itemObject.itemPrice}</h5>

      <i class="btn btn-success fas fa-eye" id="add-item-btn--${itemObject.firebaseKey}"></i>
      <i class="fas fa-edit btn btn-info" id="edit-item-btn--${itemObject.firebaseKey}"></i>
      <i class="btn btn-danger fas fa-trash-alt" id="delete-item-btn--${itemObject.firebaseKey}"></i>
    </div>
  </div>`;

  // const items = Object.values(orderObject);
  // const itemsHtml = orderObject.map((item) => `
  //   <div class="card" style="width: 18rem;">
  //     <div class="card-body">
  //       <h5 class="card-header">Item: ${item.itemName}</h5>
  //       <p class="card-text">Price: ${item.itemPrice}</p>
  //       <!-- Add other item properties as needed -->
  //     </div>
  //   </div>
  // `).join('');

  // const domString = `
  //   <div class="mt-5 d-flex flex-wrap">
  //     <h1>Order Details:</h1>
  //     ${itemsHtml}
  //     <hr>
  //     <button type="button" id="add-item" class="btn btn-success">Add Item</button>
  //     <button type="button" id="paymentPage-btn" class="btn btn-primary">Go to Payment</button>
  //   </div>
  // `;

  renderToDOM('#view', domString);
};

// const orderDetails = (item) => {
//   clearDom();
//   let authorInfo =
//   <div class="text-white ms-5 details">
//   <h5 class="card-title">${item.first_name} ${item.last_name} ${item.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
//   Author Email: <a href="mailto:${item.email}">${item.email}</a>
//   <h6><i class="fas fa-edit btn btn-info" id="update-author--${item.firebaseKey}"></i>
//   <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${item.firebaseKey}"></i></h6>
//   <p>Books</p>
//   <hr>
// </div>
// <div class="mt-4 d-flex flex-wrap">
// ;
//   let domString = '';
//   obj.authorBooks.forEach((item) => {
//     domString +=
//         <div class="card">
//           <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
//           <div class="card-body" style="height: 180px;">
//             <h5 class="card-title">${item.title}</h5>
//               <p class="card-text bold">${item.sale ? <span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price} : $${item.price}}</p>
//               <hr>
//               <i class="btn btn-success fas fa-eye" id="view-book-btn--${item.firebaseKey}"></i>
//               <i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
//               <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
//          </div>
//         </div>;
//   });
//   authorInfo += domString;
//   renderToDOM('#view', authorInfo);
// };

export default orderDetails;
