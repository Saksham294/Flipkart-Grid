import './App.css';
import React,{useEffect} from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">

<Router>
      <Navbar/>
    
        <Routes>
          <Route path="/" element={<Home/>}/>


          {/* <Route path="/community" element={<Community/>}/>
       
          <Route path='/doctors' element={<DoctorsPage/>}/> 
          <Route path='/music' element={<MusicPage/>}/>
          <Route path='/articles' element={<ArticlesPage/>}/>
          <Route path='/exercises' element={<Exercises/>}/> */}
          <Route path='/login' element={<Login/>}/>
          {/* <Route path='/register' element={isAuthenticated?<Home/>:<Register/>}/> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
