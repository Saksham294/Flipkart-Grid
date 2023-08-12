import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './Reducers/userReducer';
// import { filterReducer, getAllContentReducer,postContentReducer } from './Reducers/contentReducer';

const initialState = {}

const store = configureStore({
   reducer:{userReducer},
    preloadedState: initialState
});

export default store;