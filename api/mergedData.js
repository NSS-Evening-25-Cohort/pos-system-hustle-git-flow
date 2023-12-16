import { getSingleCustomer } from './customerData';
import { getSingleOrder } from './orderData';

const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleCustomer(firebaseKey).then((customerObject) => {
    if (customerObject) {
      getSingleOrder(customerObject.firebaseKey)
        .then((orderObject) => resolve({ ...customerObject, orderObject }))
        .catch(reject);
    }
  }).catch(reject);
});

// TODO: GET ORDER DETAILS

// const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
//   getSingleCustomer(firebaseKey).then((customerObject) => {
//     getSingleOrder(customerObject.order_id)
//       .then((orderObject) => resolve({ ...customerObject, orderObject }));
//   }).catch(reject);
// });

export default getOrderDetails;
