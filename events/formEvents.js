const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    // SUBMIT ORDER
    if (e.target.id.includes('submit-order')) {
      const payload = {
        name: document.querySelector('#name').value,
        customerOrder: document.querySelector('#customerOrder').value,
        customerEmail: document.querySelector('#customerEmail').value,
        itemType: document.querySelector('#itemType').value,
        user: user.uid
      };
      payload();
    }

    // EDITING ORDER
    if (e.target.id.includes('edit-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#name').value,
        customerOrder: document.querySelector('#customerOrder').value,
        customerEmail: document.querySelector('#customerEmail').value,
        itemType: document.querySelector('#itemType').value,
        user: user.uid,
        firebaseKey,
      };
      payload();
    };

    // SUBMIT ITEM
    if (e.target.id.includes('submit-item')) {
      const payload = {
        itemName: document.querySelector('#itemName').value,
        itemPrice: document.querySelector('#itemPrice').value,

      };
      payload();
    }

    // EDIT IITEM
    if (e.target.id.includes('edit-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        itemName: document.querySelector('#itemName').value,
        itemPrice: document.querySelector('#itemPrice').value,
        user: user.uid,
        firebaseKey,
      };
      payload();
    }
  });
};

export default formEvents;
