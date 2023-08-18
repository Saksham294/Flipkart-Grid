import React from 'react'
import './AllProductsPage.css'
import ProductCard from '../ProductCard/ProductCard'
import { Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'

const AllProductsPage = () => {
    const dispatch = useDispatch()
    let prods = [];
    let { loading, products } = useSelector(state => state.products)
    if (products) {
        prods = products;
    }
    console.log(prods)
    return prods.length > 0 ? (
        <div className="productPage">
            <Typography variant='h3'>Explore, Shop, Enjoy it All!</Typography>
            <div className='allProductsContainer'>
                <div className="categoriesContainer">
                    <div className="categories">
                        <Typography variant='h5'>Categories</Typography>
                    </div>

                </div>
                <div className="productsDisplay">
                    {prods.map((item, index) =>

                    (
                        <ProductCard
                            heading={item.name}
                            subheading={item.description}
                            img={item.image.url}
                            price={item.price}
                            url={item._id}
                        />

                    ))}
                </div>
            </div>
        </div>
    ) : null
}

export default AllProductsPage
