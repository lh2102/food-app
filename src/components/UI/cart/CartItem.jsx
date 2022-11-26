import React from "react";
import cartSilce from "../../../redux/shopping_cart/cartSlide";
import { useDispatch } from "react-redux";
const CartItem = (props) => {
    const { id, image01, title, price, totalPrice, quantity } = props.item;

    const dispatch = useDispatch();

    const handleRemoveItem = () => {
        dispatch(
            cartSilce.actions.removeItem({
                id,
                title,
                quantity,
            }),
        );
    };
    const handlePlus = () => {
        dispatch(
            cartSilce.actions.addItem({
                id,
                title,
                image01,
                price,
                quantity,
            }),
        );
    };
    const handleSub = () => {
        dispatch(cartSilce.actions.toggleMount(id))
    }
    return (
        <div className="cart__item">
            <i className="cart__item__close ri-close-line" onClick={handleRemoveItem}></i>
            <div className="cart__item_product">
                <img src={image01} alt="" />
                <span className="cart__item_title">{title}</span>
            </div>
            <div className="cart__item_quantity">
                <div className="cart__item_quantity_left">
                    <i className="ri-subtract-line" onClick={handleSub}></i>
                    <span className="cart__item_quantity__quantity">{quantity}</span>
                    <i className="ri-add-line" onClick={handlePlus}></i>
                </div>
                <div className="cart__item_quantity_right">
                    {totalPrice} $
                </div>
            </div>
        </div>
    );
};

export default CartItem;
