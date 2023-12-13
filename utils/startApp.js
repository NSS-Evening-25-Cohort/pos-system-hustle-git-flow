import domBuilder from '../components/shared/domBuilder';
import navbarEvents from '../events/navbarEvents';
import navBar from '../components/shared/navbar';
import logoutButton from '../components/logoutButton';
import homePage from '../pages/homePage';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  domBuilder(); // BUILD THE DOM
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  homePage(user);
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT

  navbarEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
};

export default startApp;
