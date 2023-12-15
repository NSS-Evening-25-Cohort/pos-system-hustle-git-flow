import { signOut } from '../utils/auth';
import { getCustomer } from '../api/customerData';
import viewOrders from '../pages/viewOrder';
import createEditOrder from '../components/form/createEditOrder';

const navbarEvents = () => {
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#all-orders').addEventListener('click', () => {
    getCustomer().then(viewOrders);
  });

  document.querySelector('#create-order').addEventListener('click', () => {
    createEditOrder();
  });

  document.querySelector('#createOrderBtn').addEventListener('click', () => {
    createEditOrder();
  });

  document.querySelector('#viewOrdersBtn').addEventListener('click', () => {
    getCustomer().then(viewOrders);
  });

  document.querySelector('#viewRevenuesBtn').addEventListener('click', () => {

  });
};

export default navbarEvents;
