import { createOrder, getOrder, updateOrder } from '../api/orderData';
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
  });
};

// // SUBMIT ITEM
// if (e.target.id.includes('submit-item')) {
//   const payload = {
//     itemName: document.querySelector('#itemName').value,
//     itemPrice: document.querySelector('#itemPrice').value,
//     // Order: document.querySelector('#Order').value
//   };
//   payload();
// }

// // EDIT IITEM
// if (e.target.id.includes('edit-item')) {
//   const [, firebaseKey] = e.target.id.split('--');
//   const payload = {
//     itemName: document.querySelector('#itemName').value,
//     itemPrice: document.querySelector('#itemPrice').value,
//     // Order: document.querySelector('#Order').value,
//     firebaseKey,
//   };
//   payload();
// }
export default formEvents;
