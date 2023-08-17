import React from 'react'
import './ProductCard.css'
import {  Typography } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {IconButton} from '@mui/material';

const ProductCard = ({ heading, subheading, img, url, price }) => {
    return (
        <a href={`/product/${url}`}>
            <div className='productContainer'>
                <div className="productImg">
                    <img src={img}></img>
                </div>
                <div className="productText">
                    <Typography variant='h5'>{heading}</Typography>
                    <div className="productParaText">
                    <p>{subheading}</p>
                    </div>
                    <Typography variant='h6'>₹ {price}</Typography>
                </div>
                <IconButton sx={{fontSize:"small",marginLeft: "15vw"}}><AddShoppingCartIcon /></IconButton>
            </div>
        </a>
    )
}

export default ProductCard
