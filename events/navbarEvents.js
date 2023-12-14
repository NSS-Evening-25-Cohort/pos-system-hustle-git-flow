import { signOut } from '../utils/auth';
import { getCustomer } from '../api/customerData';
import viewOrders from '../pages/viewOrders';

const navbarEvents = () => {
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#home').addEventListener('click', () => {

  });
  document.querySelector('#all-orders').addEventListener('click', () => {
    getCustomer().then(viewOrders);
  });

  document.querySelector('#createOrderBtn').addEventListener('click', () => {

  });

  document.querySelector('#viewOrdersBtn').addEventListener('click', () => {
    getCustomer().then(viewOrders);
  });

  document.querySelector('#viewRevenuesBtn').addEventListener('click', () => {

  });
};

export default navbarEvents;
