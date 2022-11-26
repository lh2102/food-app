import React, { useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { useDispatch, useSelector } from "react-redux";
import cartSilce from "../redux/shopping_cart/cartSlide";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartData = useSelector((state) => state.cart.cartItems);
    const totalMount = useSelector(state => state.cart.totalMount);

    useEffect(() => {
        window.scrollTo(0,0)        
    });

    return (
        <Helmet title="Cart">
            <div className="cartPage">
                <CommonSection title="Your Cart"></CommonSection>
                <div className="cartPage__wrapper">
                    <h1>Cart</h1>
                    <hr />
                    <div className="cartPage__list">
                        {cartData.length === 0 ? (
                            <h4>Your cart is empty</h4>
                        ) : (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product Title</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartData.map((item) => {
                                        return <Tr key={item.id} item={item}></Tr>;
                                    })}
                                </tbody>
                            </table>
                        )}
                    </div>
                    <div className="cartPage__total">
                        <h5>
                            Suptotal: <span>{totalMount}$</span>
                        </h5>
                        <p>Taxes and shipping will calculate at checkout</p>
                        <div className="cartPage__total-btn">
                            <button className="addToCart__btn">
                                <Link to="/foods">Continue Shopping</Link>
                            </button>
                            <button className="addToCart__btn">
                                <Link to="/checkout">Proceed to Checkout</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

const Tr = (props) => {
    const { id, title, image01, price, quantity, totalPrice } = props.item;

    const dispatch = useDispatch();

    const handleRemoveItem = () => {
        dispatch(
            cartSilce.actions.removeItem({
                id,
                title,
                price,
                quantity,
            }),
        );
    };
    return (
        <tr>
            <td>
                <img className="cartPage__list-img" src={image01} alt="" />
            </td>
            <td>{title}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                <i
                    className="cartPage__list-close ri-delete-bin-line"
                    onClick={handleRemoveItem}
                ></i>
            </td>
        </tr>
    );
};

export default Cart;
