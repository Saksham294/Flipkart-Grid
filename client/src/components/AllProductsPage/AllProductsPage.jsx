import React from 'react'
import './AllProductsPage.css'
import ProductCard from '../ProductCard/ProductCard'
import { Typography } from '@mui/material'

const AllProductsPage = () => {
    return (
        <div className="productPage">
            <Typography variant='h3'>Explore, Shop, Enjoy it All!</Typography>
            <div className='allProductsContainer'>
                <div className="categoriesContainer">
                    <div className="categories">
                        <Typography variant='h5'>Categories</Typography>
                    </div>

                </div>
                <div className="productsDisplay">
                    <ProductCard />  <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard
                        heading='Wooden Chair'
                        subheading='The best chair you can get'
                        img='https://images.unsplash.com/photo-1443884590026-2e4d21aee71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1443&q=80'
                        url='/mentor'
                        price='5000'
                    />
                </div>
            </div>
        </div>
    )
}

export default AllProductsPage
