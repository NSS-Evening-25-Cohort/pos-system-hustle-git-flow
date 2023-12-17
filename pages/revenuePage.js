import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const revenuePage = () => {
  clearDom();
  const domString = `
  <h1>Revenue</h1>

  `;
  renderToDOM('#store', domString);
};

export default revenuePage;
