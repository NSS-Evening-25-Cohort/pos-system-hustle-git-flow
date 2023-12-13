import { signOut } from '../utils/auth';

const navbarEvents = () => {
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#createOrderBtn').addEventListener('click', () => {

  });

  document.querySelector('#viewOrdersBtn').addEventListener('click', () => {

  });

  document.querySelector('#viewRevenuesBtn').addEventListener('click', () => {

  });
};

export default navbarEvents;
