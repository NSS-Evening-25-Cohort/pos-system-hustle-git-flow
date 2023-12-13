import { signOut } from '../utils/auth';
import vieworders from '../pages/ViewOrders';

const navbarEvents = () => {
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#home').addEventListener('click', () => {

  });
  document.querySelector('#viewOrdersBtn').addEventListener('click', () => {
    vieworders();
  });
  document.querySelector('#create-order-button').addEventListener('click', () => {

  });

  document.querySelector('#create-item-button').addEventListener('click', () => {

  });
};

export default navbarEvents;
