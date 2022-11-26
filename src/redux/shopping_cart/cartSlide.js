import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalMount: 0,
};

const cartSilce = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const exItem = state.cartItems.find((item) => item.id === newItem.id);
            state.totalQuantity++;

            if (!exItem) {
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    image01: newItem.image01,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                exItem.quantity++;
                exItem.totalPrice = Number(exItem.totalPrice) + Number(newItem.price);
            }

            state.totalMount = state.cartItems.reduce((total, item) => total + item.totalPrice, 0);
        },
        removeItem: (state, action) => {
            const Item = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.title !== Item.title);

            state.totalQuantity = Number(state.totalQuantity) - Number(Item.quantity);

            state.totalMount = state.cartItems.reduce((total, item) => total + item.totalPrice, 0);
        },

        toggleMount: (state, action) => {
            const id = action.payload;
            const exItem = state.cartItems.find((item) => item.id === id);
            state.totalQuantity--;
            if (exItem && exItem.quantity === 1) {
                state.cartItems = state.cartItems.filter((item) => item.id !== id);
                state.totalMount = state.cartItems.reduce(
                    (total, item) => total + Number(item.price)*Number(item.quantity),
                    0,
                );
            } else if (exItem && exItem.quantity > 1) {
                state.cartItems.forEach((item) => {
                    if (exItem.id === item.id) {
                        item.quantity--;
                    }
                });
                exItem.totalPrice = Number(exItem.price) * Number(exItem.quantity);
                state.totalMount = state.cartItems.reduce(
                    (total, item) => total + Number(item.price) * Number(item.quantity),
                    0,
                );
            }
        },
    },
});

export default cartSilce;
