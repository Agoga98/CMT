import { useState, useEffect } from 'react'
import {FaUser} from 'react-icons/fa'


function Register() {
  const [formData, setForm] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const onChange = () => {

  }

  const { name, email, password, password2 } = formData

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Registrierung
        </h1>
        <p>Bitte erstellen Sie ein neuen Account</p>
      </section>

      <section className="form">
        <form>
          <div className="form-group">
            <input type="text" className="form-control" id="name" name='name' value={name} placeholder='Bitte Namen eingeben' onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="email" name='email' value={name} placeholder='Bitte Email eingeben' onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="password" name='password' value={name} placeholder='Bitte Passwort eingeben' onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="passowrd" className="form-control" id="password2" name='password2' value={name} placeholder='Passwort bestätigen' onChange={onChange} />
          </div>
        </form>
      </section>
    </>
  )
}

export default Register