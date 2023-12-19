import { getCustomerOrders, getSingleCustomer } from './customerData';
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
