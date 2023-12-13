const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-order')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ORDER', e.target.id);
      }
    }
    // ADD ORDER
    if (e.target.id.includes('add-order-btn')) {
      console.warn();
    }
    // EDIT ORDER
    if (e.target.id.includes('edit-order-btn')) {
      // const [, firebaseKey] = e.target.id.split('--');
    }
    // DELETE ITEM
    if (e.target.id.includes('delete-item')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ITEM', e.target.id);
      }
    }
    // ADD ITEM
    if (e.target.id.includes('add-item-btn')) {
      console.warn();
    }
    // EDIT ITEM
    if (e.target.id.includes('edit-item-btn')) {
      // const [, firebaseKey] = e.target.id.split('--');
    }
  });
};

export default domEvents;
