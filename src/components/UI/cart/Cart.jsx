import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";

import "../../../styles/cart.css";
import { Link } from "react-router-dom";
import cartShowSlide from "../../../redux/shopping_cart/cartShowSlide";

const Cart = () => {
    const cartData = useSelector((state) => state.cart.cartItems);
    const totalMount = useSelector((state) => state.cart.totalMount);

    console.log(cartData);
    const dispatch = useDispatch();

    const toggleCart = () => {
        dispatch(cartShowSlide.actions.toggle());
    };

    return (
        <div className="cart__wrapper">
            <div className="cart__wrapper_div">
                <div className="cart">
                    <i className="cart__close ri-close-line" onClick={toggleCart}></i>
                    Cart
                </div>
                <div className="cart__products">
                    {cartData.length <= 0 ? (
                        <div className="no__products">No Products</div>
                    ) : (
                        cartData.map((item, i) => {
                            return <CartItem key={i} item={item}></CartItem>;
                        })
                    )}
                </div>
                <div className="cart__total">
                    <span>{`Suptotal Mount:  ${totalMount} $`}</span>

                    <button>
                        <Link to="/checkbox">Check Out</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
