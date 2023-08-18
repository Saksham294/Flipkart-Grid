import { configureStore } from '@reduxjs/toolkit';
import { cartReducer, userReducer } from './Reducers/userReducer';
import { getAllProductsReducer } from './Reducers/productReducer';
// import { filterReducer, getAllContentReducer,postContentReducer } from './Reducers/contentReducer';

const initialState = {}

const store = configureStore({
   reducer:{
    user: userReducer,
    products:getAllProductsReducer,
    cart:cartReducer

   },
    preloadedState: initialState
});

export default store;