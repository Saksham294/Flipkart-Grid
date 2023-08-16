import React from 'react'
import './ProductCard.css'
import { Typography } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductCard = ({heading,subheading,img,url,price}) => {
    return (
        <a href={url}>
            <div className='productContainer'>
            <div className="productImg">
            <img src={img}></img>
            </div>
            <div className="productText">
            <Typography variant='h5'>{heading}</Typography>
            <p>{subheading}</p>
            <Typography variant='h6'>₹ {price}</Typography>
           
            </div>
            <AddShoppingCartIcon sx={{marginLeft:"15vw"}}/>
        </div>
            </a>
    )
}

export default ProductCard
