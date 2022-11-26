import React from "react";

import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";


const categoryData = [
    {
        display: "FastFood",
        imgUrl: categoryImg01,
    },
    {
        display: "Pizza",
        imgUrl: categoryImg02,
    },
    {
        display: "Asian Food",
        imgUrl: categoryImg03,
    },
    {
        display: "Row Meat",
        imgUrl: categoryImg04,
    },
];

const Category = () => {
    return (
        <div className="container">
            <div className="category">
                {categoryData.map((item, i) => {
                    return (
                        <div key={i} className="category__item">
                                <div className="category__img">
                                    <img src={item.imgUrl} alt="" />
                                </div>
                                <h6>{item.display}</h6>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Category;
