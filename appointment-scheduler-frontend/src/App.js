import './App.css';
import Login from './components/login/login';
import Register from './components/register/register';
import Homepage from './components/homepage/homepage';
import{BrowserRouter as Router,Routes,Route}from "react-router-dom";
import { Calendar } from './Calendar';


function App() {
  return (
    <div className="App">
      {/*<Router>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>} />
        </Routes>
      </Router>/*/}
  <Calendar startingDate={new Date()}/>

    </div>
  );
}

export default App;
