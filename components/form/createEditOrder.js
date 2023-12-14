import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const createEditOrder = (obj = {}) => {
  clearDom();
  const domString = `<form id="createEditItem">
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
    <select class="form-select id="orderType" form-select-lg mb-3" aria-label="select example" required>
      <option selected>Select Order Type</option>
      <option value="phone">PHONE</option>
      <option value="in-person">IN-PERSON</option>
    </select>
  </div>
  <button type="submit" class="btn btn-success mt-3">ADD/EDIT ITEM</button>
  </form>`;

  renderToDOM('#form-container', domString);
};

export default createEditOrder;
