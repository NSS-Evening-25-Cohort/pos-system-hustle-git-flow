import client from '../utils/client';

const endpoint = client.databaseURL;

// TODO: GET Customer
const getCustomer = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/customer.json`, {
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

// TODO: DELETE Customer
const deleteSingleCustomer = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/customer/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: CREATE Customer
const createCustomer = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/customer.json`, {
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

// TODO: UPDATE Customer
const updateCustomer = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/customer/${payload.firebaseKey}.json`, {
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

// TODO: GET SINGLE Customer
const getSingleCustomer = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/customer/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
// Filter orders by BOOLEAN
const getCustomerOrders = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/customer.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const revenue = Object.values(data).filter((item) => item.orderStatus === 'false');

      resolve(revenue);
    })
    .catch(reject);
});

const getClosedOrders = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/customer.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const closed = Object.values(data).filter((item) => item.orderStatus === true);

      resolve(closed);
    })
    .catch(reject);
});

const getOpenOrders = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/customer.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const open = Object.values(data).filter((item) => item.orderStatus === false);

      resolve(open);
    })
    .catch(reject);
});

export {
  getCustomer,
  getSingleCustomer,
  deleteSingleCustomer,
  updateCustomer,
  createCustomer,
  getCustomerOrders,
  getClosedOrders,
  getOpenOrders
};
