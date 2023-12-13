import { signOut } from '../utils/auth';
import vieworders from '../pages/ViewOrders';

const navbarEvents = () => {
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#home').addEventListener('click', () => {

  });

  document.querySelector('#createOrderBtn').addEventListener('click', () => {

  });

  document.querySelector('#viewOrdersBtn').addEventListener('click', () => {
    vieworders();
  });

  document.querySelector('#viewRevenuesBtn').addEventListener('click', () => {

  });
};

export default navbarEvents;
