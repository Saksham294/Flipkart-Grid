import './App.css';
import React,{useEffect} from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { loadUser,loadDoctor } from './Actions/userActions';
import { useSelector,useDispatch } from 'react-redux';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import ProductPage from './components/ProductPage/ProductPage';
import AllProductsPage from './components/AllProductsPage/AllProductsPage';

function App() {
  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector(state => state.user)
  useEffect(()=>{
    dispatch(loadUser())
   
  },[dispatch])
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
          <Route path='/login' element={isAuthenticated?<Home/>:<Login/>}/>
          <Route path='/register' element={isAuthenticated?<Home/>:<Register/>}/>
          <Route path='/allProducts' element={<AllProductsPage/>}/>
          <Route path='/product' element={<ProductPage/>}/>
        </Routes>
      </Router>
          <Footer/>
    </div>
  );
}

export default App;

/**
 * 
 * Categories Filter
 * Buy product page for each prod
 * Send userId of all those who have bought the prod to backend
 */