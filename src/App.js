<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import CustomerOverview from "./pages/CustomerOverview";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Statistics from "./pages/Statistics";
=======
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
>>>>>>> Blerine

const App = () => {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/customeroverview"
              element={
                <CustomerOverview customerID={"63a4aede3760967f4e6bea7e"} />
              }
            />
            <Route path="/settings" element={<Settings />} />
            <Route path="/statistics" element={<Statistics />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
};

<<<<<<< HEAD
export default App;
=======
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
>>>>>>> Blerine
