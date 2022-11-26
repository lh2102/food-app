import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.jsx";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

import heroImg from "../assets/images/hero.png";
import "../styles/hero.css";
import Category from "../components/UI/category/Category.jsx";
import "../styles/Home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
    {
        title: "Quick Delivery",
        imgUrl: featureImg01,
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, dolore.",
    },
    {
        title: "Super Dine In",
        imgUrl: featureImg02,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quis.",
    },
    {
        title: "Easy Pick Up",
        imgUrl: featureImg03,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, veritatis!",
    },
];

const Home = () => {
    const [category, setCategory] = useState("ALL");

    const [productData, setProductData] = useState(products);

    useEffect(() => {
        if (category === "ALL") {
            setProductData(products);
        }
        if (category === "BURGER") {
            const filteredProducts = products.filter((item) => item.category === "Burger");
            setProductData(filteredProducts);
        }
        if (category === "PIZZA") {
            const filteredProducts = products.filter((item) => item.category === "Pizza");
            setProductData(filteredProducts);
        }
        if (category === "BREAD") {
            const filteredProducts = products.filter((item) => item.category === "Bread");
            setProductData(filteredProducts);
        }
    }, [category, productData]);

    const [hotPizza, setHotPizza] = useState([]);

    useEffect(() => {
        const filteredPizza = products.filter((item) => item.category === "Pizza");
        const slicePizza = filteredPizza.slice(0, 4);

        setHotPizza(slicePizza);
    }, []);

    return (
        <Helmet title="Home">
            <div className="hero">
                <div className="hero__wrapper">
                    <div className="hero__wrapper-item">
                        <div className="hero__content">
                            <h5>Easy way to make an order</h5>
                            <h1 className="hero__title">
                                <span>HUNGRY{` `}?</span> Just wait food <span>at your door</span>
                            </h1>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                                sit veritatis officia?{" "}
                            </p>
                            <div className="hero__btn">
                                <button className="order__btn d-flex align-items-center justify-content-between">
                                    Order Now
                                    <i className="ri-arrow-right-s-line"></i>
                                </button>
                                <button className="all__foods__btn">
                                    <Link to="/foods">See All Foods</Link>
                                </button>
                            </div>
                            <div className="hero__service d-flex">
                                <p className="d-flex align-items-center justify-content-center">
                                    <span className="shiping__icon d-flex align-items-center gap-2">
                                        <i className="d-flex align-items-center justify-content-center ri-car-line"></i>
                                        No Shipping Charge
                                    </span>
                                </p>
                                <p className="d-flex align-items-center justify-content-center">
                                    <span className="shiping__icon d-flex align-items-center gap-2">
                                        <i className="d-flex align-items-center justify-content-center ri-shield-check-line"></i>
                                        100% secure checkout
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="hero__wrapper-item">
                        <div className="hero__img">
                            <img className="w-100" src={heroImg} alt="heroimg" />
                        </div>
                    </div>
                </div>
            </div>

            {/* category */}
            <Category></Category>

            <section>
                <div className="feature">
                    <div className="feature__text-center">
                        <h5 className="feature__subtitle">What we serve</h5>
                        <h2 className="feature__title">Just sit back at home</h2>
                        <h2 className="feature__title">
                            we will <span>take care</span>
                        </h2>
                        <p className="feature__text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores,
                            animi.
                        </p>
                        <p className="feature__text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
                            repudiandae dolorem hic!
                        </p>
                    </div>
                    <div className="feature__wrapper">
                        {featureData.map((item, i) => (
                            <div className="feature__item" key={i}>
                                <div className="feature__item-img">
                                    <img src={item.imgUrl} alt="feature-img" />
                                </div>
                                <h5>{item.title}</h5>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="food">
                <div className="food__header">
                    <h2>Popular Foods</h2>
                    <div>
                        <div className="food__category">
                            <button
                                className={`food__category-btn ${
                                    category === "ALL" ? "foodBtnActive" : ""
                                }`}
                                onClick={() => {
                                    setCategory("ALL");
                                }}
                            >
                                All
                            </button>
                            <button
                                className={`food__category-btn ${
                                    category === "BURGER" ? "foodBtnActive" : ""
                                }`}
                                onClick={() => {
                                    setCategory("BURGER");
                                }}
                            >
                                <img src={foodCategoryImg01} alt="" />
                                Burger
                            </button>
                            <button
                                className={`food__category-btn ${
                                    category === "PIZZA" ? "foodBtnActive" : ""
                                }`}
                                onClick={() => {
                                    setCategory("PIZZA");
                                }}
                            >
                                <img src={foodCategoryImg02} alt="" />
                                Pizza
                            </button>

                            <button
                                className={`food__category-btn ${
                                    category === "BREAD" ? "foodBtnActive" : ""
                                }`}
                                onClick={() => {
                                    setCategory("BREAD");
                                }}
                            >
                                <img src={foodCategoryImg03} alt="" />
                                Bread
                            </button>
                        </div>
                    </div>
                </div>
                <div className="food__body">
                    <div className="products">
                        {productData.map((item, i) => (
                            <div key={item.id}>
                                <ProductCard item={item}></ProductCard>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <section className="location">
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <img src={whyImg} alt="imgwhy" className="w-100" />
                        </Col>
                        <Col lg="6" md="6">
                            <div className="location__wrapper">
                                <h2 className="location__title mb-4">
                                    Why <span>Tasty Treat</span>
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Voluptatibus quibusdam eius mollitia? Atque quasi pariatur
                                    itaque inventore expedita molestiae odio voluptatibus dicta
                                    adipisci vel ex, possimus fuga perferendis quos officia!
                                </p>
                                <ListGroup>
                                    <ListGroupItem className="border-0 ps-0">
                                        <p className="choose__us__item d-flex align-items-center gap-2">
                                            <i className="ri-checkbox-circle-line"></i>Fresh and
                                            tasty foods
                                        </p>
                                        <p className="location__desc">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing
                                            elit. Aperiam, porro?
                                        </p>
                                    </ListGroupItem>
                                    <ListGroupItem className="border-0 ps-0">
                                        <p className="choose__us__item d-flex align-items-center gap-2">
                                            <i className="ri-checkbox-circle-line"></i>Quanlity
                                            support foods
                                        </p>
                                        <p className="location__desc">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing
                                            elit. Explicabo, molestias?
                                        </p>
                                    </ListGroupItem>
                                    <ListGroupItem className="border-0 ps-0">
                                        <p className="choose__us__item d-flex align-items-center gap-2">
                                            <i className="ri-checkbox-circle-line"></i>Order from
                                            any Location
                                        </p>
                                        <p className="location__desc">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Reiciendis, laudantium.
                                        </p>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="pt-0 mt-5">
                <div>
                    <h2>Hot Pizza</h2>
                </div>
                <div className="products">
                    {hotPizza.map((item) => (
                        <div key={item.id}>
                            <ProductCard item={item}></ProductCard>
                        </div>
                    ))}
                </div>
            </section>
            <div className="testimonial">
                <div className="testimonial__wrapper">
                    <div className="testimonial__item">
                        <h5 className="testimonial__item-subtitle">Testimonial</h5>
                        <h2>
                            What our <span>customers</span> are saying
                        </h2>
                        <div className="testimonial__slider"><TestimonialSlider></TestimonialSlider></div>
                    </div>
                    <div className="testimonial__img">
                        <img src={networkImg} alt="" />
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Home;
