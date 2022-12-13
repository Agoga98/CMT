import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getProjectsbyCustomerID} from '../features/project/projectSlice'
import {getallCustomers} from '../features/customer/customerSlice'
import Container from 'react-bootstrap/Container'
import CustomerViewDetails from '../components/CustomerViewDetails'
import { useState } from 'react'


function CustomerOverview({customerID}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [customerData, setcustomerData] = useState()

  const {user} = useSelector((state) => state.auth)
  const {projects, isLoadingProjects} =  useSelector((state) => state.projects)
  const {customers} =  useSelector((state) => state.customers)
  const LastName = ''

  useEffect(() => {
    if(!user)
    {
      navigate('/login')
    }

    dispatch(getProjectsbyCustomerID(customerID))
    dispatch(getallCustomers())
    
    
  }, [user, navigate])
  
  return (
    <>
        <div>
            <Container fluid="md" className='mt-3' style={{backgroundColor: "pink"}}>
                {
                  customers.filter((val) => {
                    if(val._id == customerID){
                      return val
                    }
                  }).map((val, key) => {
                    let birthdayNewFormat = new Date(val.Birthday)
                    return <CustomerViewDetails firstname={val.FirstName} lastname={val.LastName} birthday={birthdayNewFormat.toLocaleDateString()} />
                  })
                }
            </Container>
        </div>
        <div>

        </div>
    </>
  )
}

export default CustomerOverview