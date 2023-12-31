import firebase from 'firebase/app';
import 'firebase/auth';
import startApp from './startApp';
import loginButton from '../components/loginButton';
import client from './client';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
    } else {
      // person is NOT logged in
      loginButton(user);
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
