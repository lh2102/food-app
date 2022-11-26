import React from "react";
import { Link } from "react-router-dom";

import "../../../styles/product-card.css";
import { useDispatch } from "react-redux";
import cartSilce from "../../../redux/shopping_cart/cartSlide";

const ProductCard = (props) => {
    const dispatch = useDispatch();
    const { id, title, image01, price } = props.item;

    const addtoCart = () => {
        dispatch(
            cartSilce.actions.addItem({
                id,
                title,
                image01,
                price,
            }),
        );
    };

    return (
        <div className="product__item">
            <Link to={`/foods/${id}`}>
                <div className="product__img">
                    <img src={image01} alt="product-img"/>
                </div>
            </Link>
            <div className="product__content">
                <h5>{title}</h5>
                <div className="product__footer">
                    <span className="product__price">{`$ ${price}`}</span>
                    <button className="addToCart__btn" onClick={addtoCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
