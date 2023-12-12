import domBuilder from '../components/shared/domBuilder';
// import navigationEvents from '../events/navigationEvents';
import navBar from '../components/shared/navbar';
import logoutButton from '../components/logoutButton';
// import domEvents from '../events/domEvents';
// import formEvents from '../events/formEvents';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  // domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  // formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  //  navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
};

export default startApp;
