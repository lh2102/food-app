import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routers from "../../router/Routers";
import Cart from "../UI/cart/Cart.jsx";

import { useSelector } from "react-redux";



const Layout = () => {

    // const showCart = useSelector((state) => state.cartUi.cartIsVisible);
    const showCart = useSelector(state => state.cartShow.cartShowSlide)
    return (
        <div>
            <Header></Header>
            {
                showCart ? <Cart></Cart> : null
            }

            
            <div className="container">
                <Routers></Routers>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;
