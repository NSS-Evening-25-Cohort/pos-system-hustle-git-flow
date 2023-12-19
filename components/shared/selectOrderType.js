import renderToDOM from '../../utils/renderToDOM';

const selectOrderType = () => {
  const domString = `<label for="orderType">Select Order Type</label>
  <select class="form-control" id="orderType" required>
  <option selected>Select Order Type</option>
  <option value="phone">PHONE</option>
  <option value="in-person">IN-PERSON</option>
</select>`;
  renderToDOM('#select-orderType', domString);
};

export default selectOrderType;
