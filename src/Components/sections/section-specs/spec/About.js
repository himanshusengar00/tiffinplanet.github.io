import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './about.css';
import Footer from '../../../navigation/footer/footer';
import { NavLink } from 'react-router-dom';
const specs = () => {
    return (
        <div>
            <section className="menuHeader">
                <p className="menuTitle">About Us</p>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">Menu</NavLink>
                    </li>

                </ul>
            </section>
            <Container>
                <div className="about">
                    <Row>
                        <Col>
                            <h1>About Us</h1>
                        </Col>
                    </Row>
                </div>


                <div className="content">
                    <Container>
                        <p> Tired of ordering outside food, can't find 'ghar ka khana', then Tiffin Planet is for you one of the best tiffin service in kanpur provides you high quality hygienic packaged food. </p>
                        <p>We are trying our best to provide you good quality food items at home. We understand that buying restaurant food is not easy for everyone.That's why we are providing delicious and healthy food at affordable cost.</p>
                           <p> We are using fresh vegetable, best cooking oil (like Kolhu Mustard Oil, Fortune Refined Oil) for cooking and using good quality spices made in house.We are customizing the food items as per your requirement. </p>
                           <p> We provide food in thali packets, containers, hot tiffin boxes as per your choice.  You can see that our menu includes Dal, Raita, Rice, Chapati, Salad, Pickle etc.</p>
                    </Container>
                </div>
                <Footer />
            </Container>

        </div>

    );
}

export default specs;