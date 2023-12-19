import { getSingleCustomer } from './customerData';
import { deleteSingleItems, getItems, getOrderItems } from './itemsData';
import { deleteSingleOrder } from './orderData';

const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleCustomer(firebaseKey).then((customerObject) => {
    getOrderItems(firebaseKey).then((orderObject) => resolve({ ...customerObject, orderObject }));
  }).catch(reject);
});

// const getOrderItems = (firebaseKey) => new Promise((resolve, reject) => {
//   getSingleOrder(firebaseKey).then((orderObject) => {
//     getItems().then((itemObject) => resolve({ ...itemObject, orderObject }));
//   }).catch(reject);
// });

// TODO: DELETE THE ITEM RELATIONSHIP TO ORDER RELATIONSHIP
const deleteOrderRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getItems(firebaseKey).then((itemsArray) => {
    const deleteItemPromises = itemsArray.map((item) => deleteSingleItems(item.firebaseKey));

    Promise.all(deleteItemPromises).then(() => {
      deleteSingleOrder(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export {
  getOrderDetails,
  // getOrderItems,
  deleteOrderRelationship
};
