import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BauvorhabenAnlegen from './components/BauvorhabenContainer/BauvorhabenAnlegen';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import CustomerOverview from './pages/CustomerOverview';
import NewCustomer from './pages/NewCustomer';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Statistics from './pages/Statistics';

const App = () => {
    

    return( 
        <>
            <Router>
                <div className='container'>
                    <Header/>
                    <Routes>
                        <Route path='/' element={<Dashboard/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/register' element={<Register/>}/>
                        <Route path='/customeroverview' element={<CustomerOverview customerID={"622b3da245549725c3463026"}/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/statistics' element={<Statistics/>}/>
                        <Route path='/newproject' element={<BauvorhabenAnlegen/>}/>
                    </Routes>
                </div> 
            </Router>
            <ToastContainer/>
        </>
    )
}

export default App;