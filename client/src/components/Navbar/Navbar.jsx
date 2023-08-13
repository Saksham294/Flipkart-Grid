import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import {AiOutlinePlus} from '@react-icons/all-files/ai/AiOutlinePlus'
import './Navbar.css'
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import MenuBar from './MenuBar';

const Navbar = () => {

    const { isAuthenticated } = useSelector((state) => state.user);
    return (
        <div className='navMain'>

        <div className="nav">
      
    <Link to='/'>  <div className="home">Home</div></Link>  

       <Link to='/allProducts'><div className="about-us">Explore</div></Link>  
        </div>
        {isAuthenticated?<MenuBar className='menuBar'/>:  <div className="login"><Link className='link' to="/login" style={{ textDecoration: 'none' }}>Login</Link></div>}
      
        
     </div>
    )
}

export default Navbar

