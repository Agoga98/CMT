import axios from 'axios'

const API_URL = '/api/project/'

// Get projects
const getProjects = async ( token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
  
    const response = await axios.get(API_URL, config)
  
    return response.data
  }

// Get projects by CustomerID
const getProjectsByCustomerID = async (customerID, token) => {

  const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }


    const url = API_URL + customerID
    const response = await axios.get(url, config)
  
    return response.data
  }

  const projectService = {
    getProjects,
    getProjectsByCustomerID
  }
  
  export default projectService