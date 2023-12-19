import { getCustomerOrders, getSingleCustomer } from './customerData';
import { deleteSingleItems, getItems, getSingleItems } from './itemsData';
import { deleteSingleOrder } from './orderData';

// TODO: GET ORDER DETAILS
const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleCustomer(firebaseKey).then((customerObject) => {
    getCustomerOrders().then((orderObject) => resolve({ ...customerObject, orderObject }));
  }).catch(reject);
});

// TODO: GET ITEMS IN THE ORDER
const getOrderItems = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleItems(firebaseKey).then((itemObject) => {
    getCustomerOrders().then((orderObject) => resolve({ ...itemObject, orderObject }));
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
