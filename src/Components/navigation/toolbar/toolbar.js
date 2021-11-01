import React, { Component } from 'react';
import "./toolbar.css";
import { Container, Row, Col } from 'reactstrap';
import menu from '../../../Assests/icons/menu.png';
import logo from '../../../Assests/icons/logo.png';
import home from '../../../Assests/icons/home.png';
import delivery from '../../../Assests/icons/delivery.png';
import offer from '../../../Assests/icons/offer.png';
import cart from '../../../Assests/icons/cart.png';
import service from '../../../Assests/icons/service.png';
import icon from './menu.png';
import { Link } from 'react-router-dom';

class toolbar extends Component {
    state = {
        show: false,
        short: ["contentTool"]
    }
    render() {
        let count;
        if (this.props.count === undefined) {
            count = 0;
        }
        else {
            count = this.props.count;
        }
        let ext = "";
        if (this.props.back) {
            ext = " back";
        }
        const onTouch = () => {
            if (this.state.short.length > 1) {
                this.setState({ short: ["contentTool"], show: false });
            }
            else {
                this.setState({ short: ["contentTool", "contentShow"], show: true });
            }
        }
        const t_ext = "t-ext" + ext;
        return (
            <header>
                <nav>
                    <div className={t_ext}>
                        <Container>
                            <Row>
                                <Col>
                                    <div className="logo">
                                        <img src={logo} alt="brand logo" />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="toolbar">
                                        <img src={home} alt="Home Menu Icon" />
                                        <Link to="/Home"><p>Home</p></Link>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="toolbar">
                                        <img src={menu} alt="Menu Opening Icon" />
                                        <Link to="/menu"><p>Menu</p></Link>
                                    </div>
                                </Col>

                                <Col>
                                    <div className="toolbar">
                                        <img src={service} alt="Service Opening Icon" />
                                        <Link to="/Service"><p>Service</p></Link>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="toolbar">
                                        <img src={delivery} alt="Order online Opening Icon" />
                                        <Link to="/order"><p>Order Online</p></Link>
                                    </div>
                                </Col>

                                <Col>
                                    <div className="toolbar">
                                        <img src={offer} alt="Offer Opening Icon" />
                                        <Link to="/offers"><p>Offer</p></Link>
                                    </div>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col>
                                            <div className="toolbar" >
                                                <img src={cart} alt="Menu Opening Icon" />
                                                <Link to="/cart"><p>Cart <span className="count" >{count}</span></p></Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    {/*mobile version navbar*/}
                    <div className="short">
                        <div className="Navbar">
                            <img src={icon} onClick={() => onTouch()} alt="Icon" />
                        </div>
                        <div className={this.state.short.join(" ")}>
                            <div className="items">
                                <Container>
                                    <Link to="/home">
                                        <div className="eachOne">
                                            <Row>
                                                <Col>
                                                    <div className="smallImgBox">
                                                        <img src={home} alt="An Icon" />
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <a className="linkContainer">
                                                        <Link to="/home">Home</Link>
                                                    </a>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Link>
                                    <Link to="/menu">
                                        <div className="eachOne">
                                            <Row>

                                                <Col>
                                                    <div className="smallImgBox">
                                                        <img src={menu} alt="An Icon" />
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="linkContainer">
                                                        <Link to="/menu">Menu</Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Link>
                                    <Link to="/Service">
                                        <div className="eachOne">
                                            <Row>

                                                <Col>
                                                    <div className="smallImgBox">
                                                        <img src={service} alt="An Icon" />
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="linkContainer">
                                                        <Link to="/Service">Service</Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Link>
                                    <Link to="/order">
                                        <div className="eachOne">
                                            <Row>

                                                <Col>
                                                    <div className="smallImgBox">
                                                        <img src={offer} alt="An Icon" />
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="linkContainer">
                                                        <Link to="/order">Order</Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Link>
                                    <Link to="/offers">
                                        <div className="eachOne">
                                            <Row>
                                                <Col>
                                                    <div className="smallImgBox">
                                                        <img src={cart} alt="An Icon" />
                                                    </div>
                                                </Col>

                                                <Col>
                                                    <div className="linkContainer">
                                                        <Link to="/offers">Offers</Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Link>
                                    <Link to="/cart">
                                        <div className="eachOne">
                                            <Row>

                                                <Col>
                                                    <div className="smallImgBox">
                                                        <img src={cart} alt="An Icon" />
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="linkContainer">
                                                        <Link to="/cart">Cart</Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Link>

                                </Container>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }

}

export default toolbar;