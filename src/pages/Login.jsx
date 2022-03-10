import { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import {login, reset} from '../features/auth/authSlice'
import {FaSignInAlt} from 'react-icons/fa'
import Spinner from '../components/Spinner'


function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })
  
  const { name, email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if(isError)
    {
      toast.error(message)
    }

    if(isSuccess || user){
      navigate('/login')
    }

    dispatch(reset())
  }, [user, isError,isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password
    }

    dispatch(login(userData))
  } 

  if(isLoading)
  {
    return <Spinner/>
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Anmelden
        </h1>
        <p>Hier können Sie sich anmelden</p>
      </section>

      <section className="form">
        <form>
          <div className="form-group">
            <input type="text" className="form-control" id="email" name='email' value={email} placeholder='Bitte Email eingeben' onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="password" name='password' value={password} placeholder='Bitte Passwort eingeben' onChange={onChange} />
          </div>
          <div className="form-group">
            <form onSubmit={onSubmit}>
              <button type="submit" className="btn btn-block">Anmelden</button>
            </form>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login