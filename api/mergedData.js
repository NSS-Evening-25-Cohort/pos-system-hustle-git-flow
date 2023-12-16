import { getSingleCustomer } from './customerData';
import { getSingleOrder } from './orderData';

// TODO: GET ORDER DETAILS
const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleCustomer(firebaseKey).then((customerObject) => {
    getSingleOrder(customerObject.order_id)
      .then((orderObject) => resolve({ ...customerObject, orderObject }));
  }).catch(reject);
});

export default getOrderDetails;
