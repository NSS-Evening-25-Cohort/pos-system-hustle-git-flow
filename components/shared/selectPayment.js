import renderToDOM from '../../utils/renderToDom';

const selectPayment = () => {
  const domString = `<label for="paymentType">Payment Type</label>
  <select class="form-control" id="paymentType" required>
  <option selected">Select a Payment Type</option>
  <option value="cash">Cash</option>
  <option value="card">card</option>
  <option value="mobile">mobile</option>
  </select>`;
  renderToDOM('#select-payment', domString);
};

export default selectPayment;
