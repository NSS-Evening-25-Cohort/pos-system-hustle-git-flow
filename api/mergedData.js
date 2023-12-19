import { getCustomerOrders, getSingleCustomer } from './customerData';
import { getSingleOrder } from './orderData';

const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleCustomer(firebaseKey).then((customerObject) => {
    getCustomerOrders().then((orderObject) => resolve({ ...customerObject, orderObject }));
  }).catch(reject);
});

// DELETE RELATIONSHIP

// TODO: GET ORDER TOTALS

const getOrderTotals = (firebaseKey) => new Promise((resolve, reject) => {
  getCustomerOrders(firebaseKey).then((customerOrders) => {
    const itemPromises = customerOrders.map((order) => getSingleOrder(order.firebaseKey));

    Promise.all(itemPromises)
      .then((items) => {
        const total = items.reduce((accumulator, currentItem) => accumulator + currentItem.amount, 0);
        resolve(total);
      })
      .catch(reject);
  }).catch(reject);
});

export { getOrderDetails, getOrderTotals };
