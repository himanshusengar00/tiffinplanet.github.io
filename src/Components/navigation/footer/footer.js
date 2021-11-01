import React from 'react';
import './footer.css';
import { Container, Col, Row } from 'reactstrap';
import fb from '../../../Assests/icons/footer/fb.png';
import insta from '../../../Assests/icons/footer/insta.png';
import tweet from '../../../Assests/icons/footer/tweet.png';
import heart from '../../../Assests/icons/footer/heart.png';
import { Link } from 'react-router-dom';


const footer = () => {
    return (
        <div>
            <footer id="footer" className="footer">
                <Container>
                    <Row>
                        <Col>
                            <div className="storage">
                                <Link to="/Terms"><p>T&C</p></Link>
                                <Link to="/About"><p>About Us</p></Link>
                                <a href="https://www.google.com/maps/place/Tiffin+Planet/@26.4658183,80.2924053,15z/data=!4m5!3m4!1s0x0:0x9ef4155a11e36cc7!8m2!3d26.4658183!4d80.2924053/" target="blank">Rating Us</a>
                            </div>
                        </Col>
                        <Col>
                            <div className="storage2">
                                <a href="https://instagram.com/tiffinplanetknp?utm_medium=copy_link/" target="blank"><img src={insta} alt="Icon" /></a>
                                <a href="https://m.facebook.com/tiffinplanetknp/" target="blank" ><img src={fb} alt="Icon" /></a>
                                <a href="https://twitter.com/tiffinplanetknp?s=09" target="_blank"><img src={tweet} alt="Icon" /></a>

                            </div>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <p className="footer-text">Contact Us: +918604175505, +918887236946 , +918887236947 <br />
                                Address: 3, Vijay Nagar, Shastri Nagar, Kanpur, Uttar Pradesh 208005<br />
                                <p>&copy; COPYRIGHT 2021 reserved by Tiffin Planet</p>
                                Made with <img src={heart} alt="Heart" style={{ height: "22px", padding: "0 3px", float: "none" }} /> from
                                <a style={{ display: "inline", float: "none", color: "b" }} > Himanshu Sengar</a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}
export default footer;