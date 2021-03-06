import { createSlice } from '@reduxjs/toolkit';

const initialState = {items: [], quantity: 1};
const cartSlice = createSlice({
    name: 'cartui',
    initialState,
    reducers: {
        addItemToCart(state, action){

            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if(!existingItem) {
                state.items.push({itemId: newItem.id, price: newItem.price, quant: 1, totalPrice: newItem.price, name: newItem.title});
            }else {
                existingItem.quant++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        increment(state) {
            state.quantity++;
        },
        decrement(state) {
            state.quantity--;
        }
    }
});


export const cartActions = cartSlice.actions;
export default cartSlice.reducer;