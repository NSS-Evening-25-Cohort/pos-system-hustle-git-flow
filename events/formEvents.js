import viewOrders from '../pages/viewOrder';
import { createCustomer, getCustomer, updateCustomer } from '../api/customerData';
import { createItems, getItems, updateItems } from '../api/itemsData';
import orderDetails from '../pages/OrderDetails';

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
        orderStatus: false,
      };
      createCustomer(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateCustomer(patchPayload).then(() => {
          getCustomer().then(viewOrders);
        });
      });
    }

    // EDIT ORDER
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        order: document.querySelector('#order').value,
        customerPhone: document.querySelector('#customerPhone').value,
        customerEmail: document.querySelector('#customerEmail').value,
        orderType: document.querySelector('#orderType').value,
        orderStatus: true,
        firebaseKey,
      };
      updateCustomer(payload).then(() => {
        getCustomer().then(viewOrders);
      });
    }
    if (e.target.includes('closeOrder')) {
      const [, firebaseKey] = e.target.split('--');
      const payload = {
        orderTotal: document.querySelector('#orderTotal').value,
        firebaseKey,
      };
      console.warn(payload);
      // Add logic to close the order using the payload
      // ...
    }

    // SUBMIT ITEM
    if (e.target.id.includes('submit-item')) {
      const payload = {
        itemName: document.querySelector('#itemName').value,
        itemPrice: document.querySelector('#itemPrice').value,
        // Order: document.querySelector('#Order').value
      };
      createItems(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateItems(patchPayload).then(() => {
          getItems().then(orderDetails);
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
  });
};

export default formEvents;
