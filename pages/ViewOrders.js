import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const vieworders = (array) => {
  clearDom();
  let domString = '';
  array.forEach((item) => {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body1">
      <h5 class="card-title">${item.order}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${item.orderStatus}</h6>
      <p class="card-text">${item.customerPhone}</p>
      <p class="card-text">${item.customerEmail}</p>
      <p class="card-text">${item.orderType}</p>
      <a href="#" id="orderdetails_${item.firebaseKey}" class="card-link">details</a>
      <a href="#" id="editorder_${item.firebaseKey}" class="card-link">edit</a>
      <a href="#" id="deleteorder_${item.firebaseKey}" class="card-link">delete</a>
      
  </div>`;
  });
  renderToDOM('#store', domString);
};

export default vieworders;

// import renderToDOM from '../utils/renderToDom';
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
//     <a href="#" id="orderdetails_${item.firebaseKey}" class="card-link">details</a>
//     <a href="#" id="editorder_${item.firebaseKey}" class="card-link">edit</a>
//     <a href="#" id="deleteorder_${item.firebaseKey}" class="card-link">delete</a>
// </div>`;

//   renderToDOM('#view', domString);
// };

// export default vieworders;
