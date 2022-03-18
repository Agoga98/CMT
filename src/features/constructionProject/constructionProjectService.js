import axios from 'axios'

const API_URL = '/api/cosntructionProject/'

// Get customers
const getConstructionProjects = async (customerID, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    //add custommer as a parameter
    API_URL = API_URL + 'id: customerID'

    const response = await axios.get(API_URL, config)
  
    return response.data
  }

  const constructionProjectService = {
    getConstructionProjects
  }
  
  export default constructionProjectService