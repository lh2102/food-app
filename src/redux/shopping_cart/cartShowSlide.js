

import { createSlice } from "@reduxjs/toolkit";

const cartShowSlide = createSlice ({
     name: 'cartShowSlide',
     initialState : { cartShowSlide: false},
     reducers: {
          toggle: (state) => {
               state.cartShowSlide = !state.cartShowSlide
          }
     },
})

export default cartShowSlide