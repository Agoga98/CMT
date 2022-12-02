import {useState} from 'react' 
import CustomerViewItem from './CustomerViewItem'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Spinner from '../../components/Spinner'
import {getallCustomers, reset} from '../../features/customer/customerSlice'

function CustomerContainer() {
  const [searchTerm, setSearchTerm] = useState("")

  const dispatch = useDispatch() 

  const {user} = useSelector((state) => state.auth)
  const { customers, isLoading, isError, message } = useSelector(
    (state) => state.customers
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    dispatch(getallCustomers())

    return() => {
      dispatch(reset())
    }

  }, [user, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (    
    <div className="customer-searchbox">
      <input type="text" placeholder="Suchen..." onChange={event => {setSearchTerm(event.target.value)}}/>
      <div className='customer-item-container'>
        {
          customers.filter(
            ).map((val, key) => {
            return <CustomerViewItem lastname={val.LastName} firstname={val.FirstName} email={val.Email} phonenumber={val.TelNum} id={val.CustomerID}/>
          })
        }
      </div>
    </div>
  )
}

export default CustomerContainer