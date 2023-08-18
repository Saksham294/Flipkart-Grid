import React, { useEffect } from 'react'
import { Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { getCartItems } from '../../Actions/productActions'
import './Cart.css'
import ProductCard from '../ProductCard/ProductCard'

const Cart = (inCart) => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)
    const userId = user._id
    const { cart } = useSelector(state => state.cart)
    let cartItems = [];
    if (cart) {
        cartItems = cart.items
    }
    useEffect(() => {
        dispatch(getCartItems(userId))
    }, [dispatch])
    console.log(cartItems)
    return (
        <div className='cartContainer'>
            <Typography variant='h2'>Your Cart</Typography>
            {cartItems.length > 0 ? cartItems.map((item, index) => (
                <div className='cartItems'>
                    <ProductCard
                        heading={item.name}
                        url={item.productId}
                        inCart={true}
                    />
                </div>
            )) : <Typography>Your card is empty</Typography>}
        </div>
    )
}

export default Cart
