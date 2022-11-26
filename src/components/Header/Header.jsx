import React, { useRef } from "react";
import { NavLink, Link } from "react-router-dom";

import { Container } from "reactstrap";

import logo from "../../assets/images/res-logo.png";
import "../../styles/Header.css";

import { useDispatch, useSelector } from "react-redux";

import cartShowSlide from "../../redux/shopping_cart/cartShowSlide";

const nav__Links = [
    {
        display: "Home",
        path: "/home",
    },
    {
        display: "Food",
        path: "/foods",
    },
    {
        display: "Cart",
        path: "/cart",
    },
    {
        display: "Contact",
        path: "/contact",
    },
];

const Header = () => {
    const menuShow = useRef(null);
    const handleMenu = () => menuShow.current.classList.toggle("show__menu");

    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const dispatch = useDispatch();

    const toggleCart = () => {
        dispatch(cartShowSlide.actions.toggle());
    };

    return (
        <header className="header">
            <div className="container">
                <div className="nav__wrapper d-flex align-items-center justify-content-between">
                    <Link to="/" className="logo">
                        <img src={logo} alt="logo" />
                        <p>Food App</p>
                    </Link>
                    <div className="navigation" ref={menuShow} onClick={handleMenu}>
                        <div className="menu d-flex align-items-center gap-4" onClick={handleMenu}>
                            {nav__Links.map((item, i) => (
                                <NavLink
                                    key={i}
                                    to={item.path}
                                    className={(navClass) =>
                                        navClass.isActive ? "active__menu" : ""
                                    }
                                    onClick={handleMenu}
                                >
                                    {item.display}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    {/* nav-right */}
                    <div className="nav__right d-flex align-items-center gap-4">
                        <span className="cart__icon" onClick={toggleCart}>
                            <i className="ri-store-2-fill"></i>
                            <div className="cart__badge">{totalQuantity}</div>
                        </span>
                        <span className="user">
                            <Link to="/login">
                                <i className="ri-user-3-line"></i>
                            </Link>
                        </span>
                        <span className="mobile__menu" onClick={handleMenu}>
                            <i className="ri-menu-fill"></i>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
