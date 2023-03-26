import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems';

// give it an initial state 
const initialState = {
    cartItems: cartItems ,
    amount: 10,
    total: 0,
    isLoading: true,
}

// createslice is arleady predefined function, if you logg it you see actions, reducer, casereducer
const mbunjiscartSlice = createSlice({
    name: 'cart',
    initialState,
    // reducer expects an object, containing actions, which we export hapo baadae
    reducers:{
        // frist action, takes a function that does something
        clearCart: (state) => {
            // what does the function, do... it clears the cart items setting the array to empty
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },
        increase: (state, {payload}) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount + 1; 
        },
        decrease: (state, {payload}) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount - 1; 
        }
    } 
})

// console.log(mbunjiscartSlice);

// we then export just the reducer
export const  {clearCart, removeItem, increase, decrease}  = mbunjiscartSlice.actions;

export default mbunjiscartSlice.reducer;    