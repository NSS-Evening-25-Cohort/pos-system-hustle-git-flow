import { getCustomerOrders, getSingleCustomer } from './customerData';
import { deleteSingleItems, getItems } from './itemsData';
import { deleteSingleOrder, getSingleOrder } from './orderData';

const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleCustomer(firebaseKey).then((customerObject) => {
    getCustomerOrders().then((orderObject) => resolve({ ...customerObject, orderObject }));
  }).catch(reject);
});

const getOrderItems = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey).then((orderObject) => {
    getItems().then((itemObject) => resolve({ ...itemObject, orderObject }));
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
