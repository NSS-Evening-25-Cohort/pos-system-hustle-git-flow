import { getSingleCustomer } from './customerData';
import { deleteSingleItem, getItems, getOrderItems } from './itemsData';
import { deleteSingleOrder, getSingleOrder } from './orderData';

const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleCustomer(firebaseKey).then((customerObject) => {
    getOrderItems(firebaseKey).then((orderObject) => resolve({ ...customerObject, orderObject }));
  }).catch(reject);
});

const getMergedOrderItems = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey).then((orderObject) => {
    getItems(firebaseKey).then((itemObject) => resolve({ ...orderObject, itemObject }));
  }).catch(reject);
});

// TODO: DELETE THE ITEM RELATIONSHIP TO ORDER RELATIONSHIP
const deleteOrderRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getItems(firebaseKey).then((itemsArray) => {
    const deleteItemPromises = itemsArray.map((item) => deleteSingleItem(item.firebaseKey));

    Promise.all(deleteItemPromises).then(() => {
      deleteSingleOrder(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export {
  getOrderDetails,
  getMergedOrderItems,
  deleteOrderRelationship
};
