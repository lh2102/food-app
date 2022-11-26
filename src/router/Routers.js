import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/foods" element={<AllFoods></AllFoods>}></Route>
            <Route path="/foods/:id" element={<FoodDetails></FoodDetails>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/checkout" element={<Checkout></Checkout>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
    );
};

export default Routers;
