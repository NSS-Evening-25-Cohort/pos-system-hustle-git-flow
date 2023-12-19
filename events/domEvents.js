import {
  createOrder,
} from '../api/orderData';
import createEditOrder from '../components/form/createEditOrder';
import viewOrders from '../pages/viewOrder';
import { deleteSingleCustomer, getCustomer, getSingleCustomer } from '../api/customerData';
import orderDetails from '../pages/OrderDetails';
import {
  createItems, getItems, getSingleItems, deleteSingleItems
} from '../api/itemsData';
import { getOrderDetails } from '../api/mergedData';
import revenuePage from '../pages/revenuePage';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-order')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete order?')) {
        console.warn('CLICKED DELETE ORDER', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteSingleCustomer(firebaseKey).then(() => {
          getCustomer().then(viewOrders);
        });
      }
    }

    // ADD CUSTOMER ORDER
    if (e.target.id.includes('add-order-btn')) {
      createOrder();
    }

    // EDIT CUSTOMER ORDER
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

    // ORDER DETAILS
    if (e.target.id.includes('order-details')) {
      const [, firebaseKey] = e.target.id.split('--');

      getOrderDetails(firebaseKey).then(orderDetails);
    }

    // DELETE ITEM
    if (e.target.id.includes('delete-item')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ITEM', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteSingleItems(firebaseKey).then(() => {
          getItems().then(orderDetails);
        });
      }
    }
    // ADD ITEM
    if (e.target.id.includes('add-item')) {
      createItems();
    }
    // EDIT ITEM
    if (e.target.id.includes('edit-item')) {
      const [, firebaseKey] = e.target.id.split('--') || [];

      getSingleItems(firebaseKey).then((itemObj) => createItems(itemObj));
    }
    // REVENUE PAGE {
    if (e.target.id.includes('viewRevenuesBtn')) {
      revenuePage();
    }
  });
};

export default domEvents;
