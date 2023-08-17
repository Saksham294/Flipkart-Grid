import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './Reducers/userReducer';
import { getAllProductsReducer } from './Reducers/productReducer';
// import { filterReducer, getAllContentReducer,postContentReducer } from './Reducers/contentReducer';

const initialState = {}

const store = configureStore({
   reducer:{
    user: userReducer,
    products:getAllProductsReducer,

   },
    preloadedState: initialState
});

export default store;