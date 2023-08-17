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
                    <ProductCard
                        heading='Wooden Chair'
                        subheading='The best chair you can get loremajksdnasjkndioasndoiasndioasjdioasjdioasndkajsdn asidasiodnasoidjioasjdaiosdj'
                        img='https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWluZyUyMGNvbnNvbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
                        url='/mentor'
                        price='5000'
                       
                    />
                </div>
            </div>
        </div>
    ) : null
}

export default AllProductsPage
