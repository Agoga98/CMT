import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NewCustomer from './pages/NewCustomer';
import Register from './pages/Register';
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
                        <Route path='/newcustomer' element={<NewCustomer/>}/>
                        <Route path='/statistics' element={<Statistics/>}/>
                    </Routes>
                </div> 
            </Router>
        </>
    )
}

export default App;