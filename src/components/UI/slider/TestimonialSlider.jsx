import React from "react";
import Slider from "react-slick";

import ava1 from "../../../assets/images/ava-1.jpg";
import ava2 from "../../../assets/images/ava-2.jpg";
import ava3 from "../../../assets/images/ava-3.jpg";


const TestimonialSlider = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,    
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div className="testimonial__item-slider">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae impedit, aut
                    vitae dolore adipisci pariatur ducimus rem a. Similique sequi doloribus, ab et
                    autem reiciendis?
                </p>
                <div className="testimonial__item-producer">
                    <img src={ava1} alt=""/>
                    <h6>Duy Huy</h6>
                </div>
            </div>
            <div className="testimonial__item-slider">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, doloremque
                    reprehenderit incidunt a itaque cum esse ratione quo minima aut quas quod nihil
                    dolorum neque.
                </p>
                <div className="testimonial__item-producer">
                    <img src={ava2} alt=""/>
                    <h6>Duy Huy</h6>
                </div>
            </div>
            <div className="testimonial__item-slider">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat a dolores
                    nostrum ipsum tenetur optio, corporis architecto, quos animi, exercitationem aut
                    tempore quo rerum quas?
                </p>
                <div className="testimonial__item-producer">
                    <img src={ava3} alt=""/>
                    <h6>Duy Huy</h6>
                </div>
            </div>
        </Slider>
    );
};

export default TestimonialSlider;
