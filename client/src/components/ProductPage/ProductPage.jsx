import React from 'react'
import './ProductPage.css'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import Star from '../Star/Star'

const ProductPage = ({ productId, price, description, rating,image }) => {
    return (
     <>
        <div className='productPageBox'>
            <div className="productImages">
                <img src={image} alt="" />
            </div>
            <div className="productInfo">
                <Typography variant='h4'>Product Name</Typography>
                <Star stars={4}></Star>
                <Typography variant='h6'>₹ 5000</Typography>
                <Button variant='contained' color='primary' sx={{
                    backgroundColor: "#08d4a4",
                    fontSize: "1vw",
                    paddingRight: "8vw",
                    paddingLeft: "8vw",
                    paddingTop: "1vw",
                    paddingBottom: "1vw",
                    borderRadius: "1.5vw",
                    marginTop: "2vw",
                    marginLeft: "14.5vw"

                }}>Buy Now</Button>
            </div>
            {
                /**
                 * 
                 * Name
                 * Price
                 * Buy Now Button
                 * Description
                 * Rating
                 * Rate yourself
                 */
            }
        </div>
        <div className="description">
            <Typography variant='h5'>Description</Typography>
            <Typography variant='h6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quisquam quae ad voluptatibus incidunt! Dolorum obcaecati veniam dolorem voluptates modi, quas, nihil quaerat architecto ipsam alias quis qui exercitationem cum?
            </Typography>
        </div>
     </>
    )
}

export default ProductPage
