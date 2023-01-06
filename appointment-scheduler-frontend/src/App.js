import './App.css';
import Login from './components/login/login';
import Register from './components/register/register';
import{BrowserRouter as Router,Routes,Route}from "react-router-dom";
import  Calendar  from './Calendar';
import { useState } from 'react';
import UserHome from './components/User/UserHome';
import DoctorRegstration from './components/Doctor/DoctorRegstration';
import UserRegistration from './components/User/UserRegistration';

function App() {
  const [user,setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Routes>
          {/*  <Route path='/' element=  
          //  {
          //     (user && user._id) ? <Calendar startingDate={new Date()}/> : <Login setLoginUser={setLoginUser}/>
  //  }/>  */}
          <Route path='/booking' element={<Calendar startingDate={new Date()}/>}/>
          <Route path='/login' element={<Login setLoginUser={setLoginUser}/>}/>
          <Route path='/register' element={<Register/>} />
          <Route path='/user-home' element={<UserHome/>} />
          <Route path='/doctor-registration' element={<DoctorRegstration/>} />
          <Route path='/user-registration' element={<UserRegistration/>} />
        </Routes>
      </Router>
  {/*<Calendar startingDate={new Date()}/>*/}

    </div>
  );
}

export default App;
