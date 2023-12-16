import {
  createOrder, getOrder,
} from '../api/orderData';
import createEditOrder from '../components/form/createEditOrder';
import viewOrders from '../pages/viewOrder';
import { deleteSingleCustomer, getSingleCustomer } from '../api/customerData';
import getOrderDetails from '../api/mergedData';
import orderdetails from '../pages/OrderDetails';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-order')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete order?')) {
        console.warn('CLICKED DELETE ORDER', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteSingleCustomer(firebaseKey).then(() => {
          getOrder().then(viewOrders);
        });
      }
    }
    // ADD ORDER
    if (e.target.id.includes('add-order-btn')) {
      createOrder();
    }
    // EDIT ORDER
    if (e.target.id.includes('edit-order')) {
      const [, firebaseKey] = e.target.id.split('--') || [];

      if (firebaseKey) {
        getSingleCustomer(firebaseKey).then((orderObj) => {
          if (orderObj) {
            createEditOrder(orderObj);
          } else {
            console.error('Order object not found.');
          }
        }).catch((error) => {
          console.error('Error fetching order:', error);
        });
      } else {
        console.error('Firebase key not found.');
      }
    }
    if (e.target.id.includes('orderdetails')) {
      const [, firebaseKey] = e.target.id.split('--');

      getOrderDetails(firebaseKey).then(orderdetails);
    }
    // // DELETE ITEM
    // if (e.target.id.includes('delete-item')) {
    //   // eslint-disable-next-line no-alert
    //   if (window.confirm('Want to delete?')) {
    //     console.warn('CLICKED DELETE ITEM', e.target.id);
    //   }
    // }
    // // ADD ITEM
    // if (e.target.id.includes('add-item-btn')) {
    //   console.warn();
    // }
    // // EDIT ITEM
    // if (e.target.id.includes('edit-item-btn')) {
    //   // const [, firebaseKey] = e.target.id.split('--');
    // }
  });
};

export default domEvents;
