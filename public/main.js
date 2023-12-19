import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import logo from '../assets/logo.png';

const init = () => {
  document.querySelector('#login-form-container').innerHTML = `
  <img src="${logo}" alt="Hip Hop Pizza logo" width="50%" height="50%">
  `;
  ViewDirectorBasedOnUserAuthStatus();
};

init();
