import { createCustomer, getCustomer, updateCustomer } from '../api/customerData';
import viewOrders from '../pages/viewOrder';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // SUBMIT CUSTOMER ORDER
    if (e.target.id.includes('submit-order')) {
      const payload = {
        order: document.querySelector('#order').value,
        customerPhone: document.querySelector('#customerPhone').value,
        customerEmail: document.querySelector('#customerEmail').value,
        orderType: document.querySelector('#orderType').value,
        orderStatus: true,
      };
      createCustomer(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateCustomer(patchPayload).then(() => getCustomer())
          .then(viewOrders)
          .catch((error) => {
            console.error('Error:', error);
          });
      });
    }

    // EDIT CUSTOMER ORDER
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
  });
};

export default formEvents;
