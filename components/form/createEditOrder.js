import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDOM';
import selectOrderType from '../shared/selectOrderType';

const createEditOrder = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
  <div class="form-container" >
    <div class="mb-3">
      <label for="order" class="form-label">Order Name</label>
      <input type="text" class="form-control" id="order" placeholder="Enter Order Name Here" value="${obj.order || ''}" required>
    </div>
    <div class="mb-3">
      <label for="customerPhone" class="form-label">Customer Phone</label>
      <input type="text" class="form-control" id="customerPhone" placeholder="Enter Customer Phone Here" value="${obj.customerPhone || ''}" required>
    </div>
    <div class="mb-3">
      <label for="customerEmail" class="form-label">Customer Email</label>
      <input type="text" class="form-control" id="customerEmail" placeholder="Enter Customer Email Here" value="${obj.customerEmail || ''}" required>
    </div>
   <div class="form-group" id="select-orderType"></div>
  </div>
  <button type="submit" class="btn btn-success mt-3">ADD/EDIT ORDER</button>
  </form>`;

  renderToDOM('#form-container', domString);
  selectOrderType(`${obj.orderType || ''}`);
};

export default createEditOrder;
