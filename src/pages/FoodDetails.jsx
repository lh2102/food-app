import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import products from "../assets/fake-data/products";
import { useDispatch } from "react-redux";
import cartSilce from "../redux/shopping_cart/cartSlide";
import ProductCard from "../components/UI/product-card/ProductCard";

const FoodDetails = (props) => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const foodDetailData = products.find((item) => item.id === id);
    const [previewImg, setPreviewImg] = useState(foodDetailData.image01);

    useEffect(() => {
        setPreviewImg(foodDetailData.image01);
    }, [foodDetailData]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [foodDetailData]);

    const relatedProduct = products.filter((item) => item.category === foodDetailData.category);

    const handleClickImg = (data) => {
        setPreviewImg(data);
        window.scrollTo(0, 160);
    };
    const addItemFood = () => {
        dispatch(
            cartSilce.actions.addItem({
                id: id,
                title: foodDetailData.title,
                image01: foodDetailData.image01,
                price: foodDetailData.price,
            }),
        );
    };

    return (
        <Helmet title="">
            <div className="foodDetails">
                <CommonSection title={`${foodDetailData.title}`}></CommonSection>
                <div className="container">
                    <div className="foodDetails__wrapper">
                        <div className="foodDetails__img">
                            <div className="foodDetails__list">
                                <div
                                    className={`foodDetails__list-item ${
                                        previewImg === foodDetailData.image01 ? "active" : ""
                                    }`}
                                >
                                    <img
                                        src={foodDetailData.image01}
                                        alt=""
                                        onClick={() => handleClickImg(foodDetailData.image01)}
                                    />
                                </div>
                                <div
                                    className={`foodDetails__list-item ${
                                        previewImg === foodDetailData.image02 ? "active" : ""
                                    }`}
                                >
                                    <img
                                        src={foodDetailData.image02}
                                        alt=""
                                        onClick={() => handleClickImg(foodDetailData.image02)}
                                    />
                                </div>
                                <div
                                    className={`foodDetails__list-item ${
                                        previewImg === foodDetailData.image03 ? "active" : ""
                                    }`}
                                >
                                    <img
                                        src={foodDetailData.image03}
                                        alt=""
                                        onClick={() => handleClickImg(foodDetailData.image03)}
                                    />
                                </div>
                            </div>
                            <div className="foodDetails__main">
                                <img src={previewImg} alt="" />
                            </div>
                        </div>
                        <div className="foodDetails__info">
                            <h1 className="foodDetails__info-title">{foodDetailData.title}</h1>
                            <span className="foodDetails__info-price">
                                Price: <span>{foodDetailData.price}$</span>
                            </span>
                            <p className="foodDetails__info-category">
                                <p>Category:</p> <span>{foodDetailData.category}</span>
                            </p>
                            <button
                                className="foodDetails__info-btn addToCart__btn"
                                onClick={addItemFood}
                            >
                                <i className="ri-shopping-cart-2-line"></i>
                                <span>Add To Cart</span>
                            </button>
                        </div>
                    </div>
                    <div className="foodDetails__desc">
                        <h2>{foodDetailData.title}</h2>
                        <p>{foodDetailData.desc}</p>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, facere
                            fuga. Ipsa eius sapiente perspiciatis quae minima incidunt alias cum
                            cumque laudantium, optio illum deserunt aspernatur autem ea, numquam
                            consequatur similique a deleniti architecto quaerat! Inventore maxime
                            maiores vel debitis eos, quod, mollitia aut enim facilis provident in
                            odio fuga, sunt incidunt reprehenderit assumenda nesciunt ea natus est.
                            Aliquam laboriosam dolorem aperiam quae laborum blanditiis. Odit saepe
                            possimus magni nisi modi! Delectus doloremque amet velit odio architecto
                            tenetur, nulla quidem temporibus accusamus harum dignissimos placeat
                            ratione, alias corrupti laboriosam non, deleniti porro laborum optio
                            minima. Ut ipsam minus tenetur fugit!
                        </span>
                    </div>
                    <hr />
                    <div className="related__product">
                        <h1>Similar Product</h1>
                        <div className="products">
                            {relatedProduct.map((item) => (
                                <ProductCard key={item.id} item={item}></ProductCard>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default FoodDetails;
