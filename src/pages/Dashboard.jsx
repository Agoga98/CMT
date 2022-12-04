import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { useSelector} from 'react-redux'
import CustomerContainer from '../components/CustomerSearchView/CustomerContainer'
import BauvorhabenContainer from '../components/BauvorhabenContainer/BauvorhabenContainer'
import BauvorhabenAnlegen from '../components/BauvorhabenContainer/BauvorhabenAnlegen'



function Dashboard() {
  const navigate = useNavigate()

  const {user} = useSelector((state) => state.auth)

  useEffect(() => {

    if(!user)
    {
      navigate('/login')
    }

  }, [user, navigate])

  return (
    <div className="customer-container">
      <BauvorhabenAnlegen/>
      <BauvorhabenContainer/>
    </div>
  )
}

export default Dashboard