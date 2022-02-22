import axios from 'axios'

const url = 'http://localhost:5000/customers/';

export const fetchCustomers = () => axios.get(url);