import { configureStore } from "@reduxjs/toolkit";

// import your slice here, and give it a name
// mbunjicartReducer = mbunjicartslice.reducer
import mbunjicartReducer from './features/cart/cartSlice'


export const store = configureStore({
    reducer: {
        cart: mbunjicartReducer,
    },
});