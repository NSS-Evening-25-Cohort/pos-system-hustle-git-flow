import client from '../utils/client';

const endpoint = client.databaseURL;

// TODO: GET Order
const getOrder = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});
// TODO: DELETE Order
const deleteSingleOrder = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: CREATE Order
const createOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
// TODO: UPDATE Order
const updateOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/order/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: GET SINGLE Order
const getSingleOrder = async (orderId) => {
  try {
    // Replace this with your actual data retrieval method
    const response = await fetch(`/api/orders/${orderId}`);
    const orderObject = await response.json();
    // Check for successful response and valid data
    if (!response.ok || !orderObject) {
      throw new Error(`Error fetching order details for ID: ${orderId}`);
    }
    return orderObject;
  } catch (error) {
    return Promise.reject(error);
  }
};

export {
  deleteSingleOrder,
  createOrder,
  updateOrder,
  getSingleOrder,
  getOrder
};
