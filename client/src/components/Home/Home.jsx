import { Button, Typography } from '@mui/material'
import React from 'react'
import './Home.css'
import ProductCard from '../ProductCard/ProductCard'
import { Link } from 'react-router-dom'


const Home = () => {
    const imgUrl="https://images.unsplash.com/photo-1545315003-c5ad6226c272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"

    return (

        <div className='insideHome'>
            <section className='homeSection'>
                <div className="homeDiv1">
                   <div className="homeText">
                   <Typography variant='h3'>Welcome to the Flipkart Grid</Typography>
                    <Typography variant='h5'>You deserve the best products</Typography>
                    <Link to='/allProducts'>
                    <Button variant='contained' color='primary' 
                    sx={{backgroundColor:"#08d4a4",margin:"2.7vw",fontSize:"1vw",paddingRight:"2vw",paddingLeft:"2vw",paddingTop:"1vw",paddingBottom:"1vw",borderRadius:"1.5vw"}}>
                        Shop Now
                        </Button>
                    </Link>
                   </div>
                   <div className="homeDiv2">

                   </div>
                    
                </div>

                
            </section>
         
        </div>
    )
}

export default Home
