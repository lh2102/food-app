

import { configureStore } from "@reduxjs/toolkit";
import cartShowSlide from "./shopping_cart/cartShowSlide";
import cartSilce from "./shopping_cart/cartSlide";

const store = configureStore ({
     reducer: {
          cart: cartSilce.reducer,
          cartShow: cartShowSlide.reducer,
     }
})

export default store