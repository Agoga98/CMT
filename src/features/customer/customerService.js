import axios from 'axios'

const API_URL = '/api/customer/'

// Get customers
const getCustomers = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.get(API_URL, config)
  
    return response.data
  }

  const customerService = {
    getCustomers
  }
  
  export default customerService