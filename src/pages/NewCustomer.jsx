import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import {FaUserPlus} from 'react-icons/fa'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {formatPhoneNumber} from 'react-phone-number-input'

function NewCustomer() {
  const [formCustomerData, setformCustomerData] = useState({
    CustomerID: '',
    LastName: '',
    Firstname: '',
    Birthday: null,
    Email: '',
    TelNum: '',
    Adress: '',
    PostalCode: null,
    City: '',
    Country: ''
  })

  const {
    CustomerID,
    LastName,
    Firstname,
    Birthday,
    Email,
    TelNum,
    Adress,
    PostalCode,
    City,
    Country
  } = formCustomerData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)

  useEffect(() => {

    if(!user)
    {
      navigate('/login')
    }

  }, [user, navigate])

  const onChange = (e) => {
    if(e.target.name === 'TelNum'){
      setformCustomerData((prevState) => ({
        ...prevState,
        [e.target.name]: formatPhoneNumber(e.target.value),
      }))
    }
    else
    {
      setformCustomerData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
    }
  }

  const onSubmit = (e) => {

  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUserPlus /> Neuen Kunden anlegen
        </h1>
      </section>

      <section className="form">
      <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" id="LastName" name='LastName' value={LastName} placeholder='Bitte Nachnamen eingeben' onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="Firstname" name='Firstname' value={Firstname} placeholder='Bitte Vornamen eingeben' onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="Email" name='Email' value={Email} placeholder='Bitte Email eingeben' onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="date" className="form-control" id="Birthday" name='Birthday' value={Birthday} onChange={onChange} />
          </div>
          <div className="form-group">
            <PhoneInput defaultCountry='AT' placeholder="Bitte Telefonnummer eingeben" id="TelNum" name='TelNum' value={TelNum} onChange={onChange}/>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">Bestätigen</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default NewCustomer