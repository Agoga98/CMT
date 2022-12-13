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
    setformCustomerData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
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
            <input type="text" id="Birthday" name='Phonenumber' placeholder="Bitte Telefonnummer eingeben" value={formCustomerData.TelNum} onChange={(e) => setformCustomerData({ ...formCustomerData, TelNum: e.target.value})}/>
          </div>
          <h4>Adresse</h4>
          <div className="form-group">
            <input type="text" className="form-control" id="Adress" name='Adress' value={Adress} placeholder='Bitte Adresse und Hausnummer eingeben' onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="number" min="0" max="99999" className="form-control" id="PostalCode" name='PostalCode' placeholder='Bitte Postleitzahl eingeben' value={PostalCode} onChange={onChange} />
            <input type="text" className="form-control" id="City" name='City' placeholder='Bitte Stadt/Dorf eingeben' value={City} onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="Country" name='Country' value={Country} placeholder='Bitte Land eingeben' onChange={onChange} />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">Speichern</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default NewCustomer