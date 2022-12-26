import axios from "axios";

const API_URL = "/api/customer/";

// Get customers
const getCustomers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const createCustomer = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, config);

  return response.data;
};

/**
 * @param {string} id
 * @param {Object} customerdata
 * @param {string} token
 * @returns {Object} customerdata
 */
const updateCustomer = async (id, customerdata, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  console.log(id);

  const api_url_id = API_URL + id;

  console.log(api_url_id);

  const response = await axios.put(api_url_id, customerdata, config);

  return response.data;
};

const customerService = {
  getCustomers,
  createCustomer,
  updateCustomer,
};

export default customerService;
