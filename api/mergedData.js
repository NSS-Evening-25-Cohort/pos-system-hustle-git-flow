import { getSingleCustomer } from './customerData';
import { getSingleOrder } from './orderData';

// const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
//   getSingleCustomer(firebaseKey).then((customerObject) => {
//     if (customerObject) {
//       getSingleItems(customerObject.firebaseKey)
//         .then((itemObject) => resolve({ ...customerObject, itemObject }))
//         .catch(reject);
//     }
//   }).catch(reject);
// });

const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
  // GET SINGLE BOOK
  getSingleCustomer(firebaseKey).then((customerObject) => { // returns single item object
    getSingleOrder(customerObject.order_id) // we nest this promise so that we can use the item object
      .then((orderObject) => resolve({ ...customerObject, orderObject }));
  }).catch(reject);
  // GET AUTHOR
  // Create an object that has item data and an object named authorObject
});
// TODO: GET ORDER DETAILS

// const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
//   getSingleCustomer(firebaseKey).then((customerObject) => {
//     getSingleOrder(customerObject.order_id)
//       .then((orderObject) => resolve({ ...customerObject, orderObject }));
//   }).catch(reject);
// });

export default getOrderDetails;
