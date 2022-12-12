import {FaSignInAlt, FaSignOutAlt, FaUser, FaUserPlus, FaHome} from 'react-icons/fa'
import {IoStatsChart, IoSettings} from 'react-icons/io5'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'


function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)

const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
}

  return (
    <header className='header'>
        <div>
            <>Blakaj Fenster und Türen</>
        </div>
        {user ? (
        <div className='header-menu'>
            <ul>
                <li>
                    <Link to='/'>
                        <FaHome /> Dashboard    
                    </Link>
                </li>
                <li>
                    <Link to='/customerOverview'>
                        <FaUser /> Kundenübersicht    
                    </Link>
                </li>
                <li>
                    <Link to='/statistics'>
                        <IoStatsChart /> Statistik    
                    </Link>
                </li>
                <li>
                    <Link to='/settings'>
                        <IoSettings /> Einstellungen    
                    </Link>
                </li>
            </ul>
        </div>
        ) : 
        (<></>)
        }
        <ul>
            {user ? 
            (<>
                
                <li>
                    <button className='btn' to='/login' onClick={onLogout}>
                        <FaSignInAlt/> Logout    
                    </button>
                </li>
            </>) : 
            (<>
                <li>
                    <Link to='/login'>
                        <FaSignInAlt/> Login    
                    </Link>
                </li>
                <li>
                    <Link to='/register' >
                        <FaUser /> Register
                    </Link>
                </li>
            </>)}
            
        </ul>
    </header>
  )
}

export default Header