import createEditOrder from '../components/form/createEditOrder';
import viewOrders from '../pages/viewOrder';
import {
  deleteSingleCustomer, getClosedOrders, getCustomer, getOpenOrders, getSingleCustomer
} from '../api/customerData';
import orderDetails from '../pages/OrderDetails';
import {
  createItems, getItems, getSingleItem, deleteSingleItem
} from '../api/itemsData';
import { getOrderDetails } from '../api/mergedData';
import revenuePage from '../pages/revenuePage';
import closeOrderForm from '../pages/CloseOrder';
import createEditItem from '../components/form/createEditItem';

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
    if (e.target.id.includes('createOrderBtn')) {
      createEditOrder();
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
    if (e.target.id.includes('orderdetails')) {
      const [, firebaseKey] = e.target.id.split('--');

      getOrderDetails(firebaseKey).then(orderDetails);
    }

    // DELETE ITEM
    if (e.target.id.includes('delete-item')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ITEM', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteSingleItem(firebaseKey).then(() => {
          getItems().then(orderDetails);
        });
      }
    }
    // ADD ITEM
    if (e.target.id.includes('add-item')) {
      createEditItem();
    }
    // EDIT ITEM
    if (e.target.id.includes('edit-item')) {
      const [, firebaseKey] = e.target.id.split('--') || [];

      getSingleItem(firebaseKey).then((itemObj) => createItems(itemObj));
    }

    // CLOSE ORDER FORM
    if (e.target.id.includes('paymentPage-btn')) {
      closeOrderForm();
    }

    // REVENUE PAGE {
    if (e.target.id.includes('viewRevenuesBtn')) {
      revenuePage();
    }

    // OPEN BUTTON
    if (e.target.id.includes('open-button')) {
      getOpenOrders().then(viewOrders);
    }

    // CLOSE BUTTON
    if (e.target.id.includes('closed-button')) {
      getClosedOrders().then(viewOrders);
    }
  });
};

export default domEvents;
