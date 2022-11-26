import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="3" md="4" sm="6">
                        <div className="logo footer__logo text-start">
                            <img src={logo} alt="logo" />
                            <h5>Food App</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                                distinctio eius ipsam officiis perspiciatis ad, repudiandae esse
                                voluptatem corrupti sequi libero
                            </p>
                        </div>
                    </Col>
                    <Col lg="3" md="4" sm="6">
                        <h5 className="footer__title">Delivery Time</h5>
                        <ListGroup className="delivery__time-list">
                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>Sunday - Thursday</span>
                                <p>10:00 am - 11:00 pm</p>
                            </ListGroupItem>
                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>Friday - Saturday</span>
                                <p>Off day</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg="3" md="4" sm="6">
                        <h5 className="footer__title">Contact</h5>
                        <ListGroup className="delivery__time-list">
                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>Location: Ha Noi, Viet Nam</span>
                            </ListGroupItem>
                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>Phone: +8433.653.8916</span>
                            </ListGroupItem>
                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>Email: huy@gmail.com</span>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg="3" md="4" sm="6">
                        <h5 className="footer__title">Newsletter</h5>
                        <div className="newsletter">
                            <input type="email" placeholder="Enter your email" />
                            <span>
                                <i className="ri-send-plane-fill"></i>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer__end">Nguyen Duy Huy.</div>
        </footer>
    );
};

export default Footer;
