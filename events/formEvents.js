import { getClosedOrders, updateCustomer } from '../api/customerData';
import {
  createItems, getItems, getOrderItems, updateItems,
} from '../api/itemsData';
import { createOrder, getOrder, updateOrder } from '../api/orderData';
import orderDetails from '../pages/OrderDetails';
import viewOrders from '../pages/viewOrder';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // SUBMIT ORDER
    if (e.target.id.includes('submit-order')) {
      const payload = {
        order: document.querySelector('#order').value,
        customerPhone: document.querySelector('#customerPhone').value,
        customerEmail: document.querySelector('#customerEmail').value,
        orderType: document.querySelector('#orderType').value,
        orderStatus: document.querySelector('#orderStatus').checked,
      };
      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrder(patchPayload).then(() => {
          getOrder().then(viewOrders);
        });
      });
    }

    // EDIT ORDER
    if (e.target.id.includes('edit-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        order: document.querySelector('#order').value,
        customerPhone: document.querySelector('#customerPhone').value,
        customerEmail: document.querySelector('#customerEmail').value,
        orderType: document.querySelector('#orderType').value,
        orderStatus: document.querySelector('#orderStatus').checked,
        firebaseKey,
      };
      updateOrder(payload).then(() => {
        getOrder().then(viewOrders);
      });
    }
    // SUBMIT ITEM
    if (e.target.id.includes('submit-item')) {
      const payload = {
        itemName: document.querySelector('#itemName').value,
        itemPrice: document.querySelector('#itemPrice').value,
      };
      createItems(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateItems(patchPayload).then(() => {
          getItems().then(orderDetails);
        });
      });
    }
    // // EDIT ITEM
    if (e.target.id.includes('edit-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        itemName: document.querySelector('#itemName').value,
        itemPrice: document.querySelector('#itemPrice').value,
        firebaseKey,
      };
      updateItems(payload).then(() => {
        getItems().then(orderDetails);
      });
    }

    // SUBMIT ITEM
    if (e.target.id.includes('submit-item')) {
      const payload = {
        itemName: document.querySelector('#itemName').value,
        itemPrice: document.querySelector('#itemPrice').value,
      };
      createItems(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateItems(patchPayload).then(() => {
          getOrderItems().then(orderDetails);
        });
      });
    }

    // EDIT IITEM
    if (e.target.id.includes('edit-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        itemName: document.querySelector('#itemName').value,
        itemPrice: document.querySelector('#itemPrice').value,
        // Order: document.querySelector('#Order').value
        firebaseKey
      };
      updateItems(payload).then(() => {
        getItems().then(orderDetails);
      });
    }

    // CLOSE ORDER
    if (e.target.id.includes('submit-closed-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        orderTotal: document.querySelector('#orderTotal').value,
        tipAmount: document.querySelector('#tipAmount').value,
        firebaseKey,
      };
      const patchPayload = {
        orderStatus: document.getElementById('#orderStatus').checked === true,
        firebaseKey,
      };

      updateCustomer(patchPayload).then(updateOrder(payload));
      getClosedOrders().then(viewOrders);
    }
  });
};

export default formEvents;
