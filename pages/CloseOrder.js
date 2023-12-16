import selectPayment from '../components/shared/selectPayment';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const closeOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-closeOrder--${obj.firebaseKey}` : 'submit-closeOrder'}" class="mb-4">
    <div class="form-group" id="select-payment">
      </div>
      <div class="form-group">
        <label for="tipAmount">Tip Amount</label>
        <input type="text" class="form-control" id="tipAmount" aria-describedby="tipAmount" placeholder="Enter Tip Amount" value="Tip Amount" required>
      </div>
      <button type="submit" class="btn btn-primary">Close Order
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectPayment(`${obj.paymentMethod || ''}`);
};

export default closeOrderForm;
