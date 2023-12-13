import { signOut } from '../utils/auth';

const navbarEvents = () => {
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#create-order-button').addEventListener('click', () => {

  });

  document.querySelector('#create-item-button').addEventListener('click', () => {

  });
};

export default navbarEvents;
