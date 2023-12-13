import { signOut } from '../utils/auth';
import vieworders from '../pages/ViewOrders';
import { getCustomer } from '../api/customerData';

const navbarEvents = (customer) => {
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#home').addEventListener('click', () => {

  });

  document.querySelector('#createOrderBtn').addEventListener('click', () => {

  });

  document.querySelector('#viewOrdersBtn').addEventListener('click', () => {
    if (customer && customer.cid) {
      getCustomer(customer.cid).then(vieworders);
    } else {
      console.error("Invalid customer object or missing 'cid' property");
    }
  });

  document.querySelector('#viewRevenuesBtn').addEventListener('click', () => {

  });
};

export default navbarEvents;
