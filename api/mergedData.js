import { getSingleCustomer } from './customerData';

import {
  deleteSingleItems, getItems, getSingleItems,
} from './itemsData';
import { deleteSingleOrder, getOrder } from './orderData';

const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleCustomer(firebaseKey).then((customerObject) => {
    getSingleItems(customerObject.item_id).then((itemObject) => resolve({ ...customerObject, itemObject }));
  }).catch(reject);
});

const getOrderItems = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleItems(firebaseKey).then((itemObject) => {
    getOrder().then((orderObject) => resolve({ ...itemObject, orderObject }));
  }).catch(reject);
});

// TODO: DELETE THE ITEM RELATIONSHIP TO ORDER RELATIONSHIP
const deleteOrderRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getItems(firebaseKey).then((itemsArray) => {
    const deleteItemPromises = itemsArray.map((item) => deleteSingleItems(item.firebaseKey));

    Promise.all(deleteItemPromises).then(() => {
      deleteSingleOrder(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export { getOrderDetails, getOrderItems, deleteOrderRelationship };
