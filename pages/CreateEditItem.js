import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const createEditItem = (obj = {}) => {
  clearDom();
  const domString = `<form id="createEditItem">
  <div class="form-container" >
    <div class="mb-3">
      <label for="itemName" class="form-label">Item Name</label>
      <input type="text" class="form-control" id="itemName" value="${obj.itemName || ''}" placeholder="Enter Item Name Here" required>
    </div>
    <div class="mb-3">
      <label for="itemType" class="form-label">Item Type</label>
      <input type="text" class="form-control" id="itemType" value="${obj.itemType || ''}" placeholder="Enter Item Type Here" required>
    </div>
  </div>
  <button type="submit" class="btn btn-success mt-3">ADD/EDIT ITEM</button>
  </form>`;

  renderToDOM('#form-container', domString);
};

export default createEditItem;
