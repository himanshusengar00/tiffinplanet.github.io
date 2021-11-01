import React, { Component } from 'react';
import './orderForm.css';
import { Container, Row, Col } from 'reactstrap';
import Payment from '../../razorPay/payment'


class orderForm extends Component {
    state = {
        name: "",
        phone: "",
        houseNumber: "",
        location: "",
        pincode: "",
        landmark: "",
    };
    nameHandler = (e) => {
        this.setState({ name: e.target.value });
    };
    phoneHandler = (e) => {
        this.setState({ phone: e.target.value });
    };
    houseHandler = (e) => {
        this.setState({ houseNumber: e.target.value });
    };
    locationHandler = (e) => {
        this.setState({ location: e.target.value });
    };
    pincodeHandler = (e) => {
        this.setState({ pincode: e.target.value });
    };
    landHandler = (e) => {
        this.setState({ landmark: e.target.value });
    };

    render() {
        var checkOut = {
            name: this.state.name,
            phone: this.state.phone,
            houseNumber: this.state.houseNumber,
            location: this.state.location,
            landmark: this.state.landmark,
            pincode: this.state.pincode
        };
        return (
            <div className="OrderForm">
                <p className="OrderFormHead">Fill Delivery Details</p>
                <form id="orderForm">
                    <div className="form__container">
                        <Container>
                            <Row>
                                <Col xs="4" xl="4">
                                    <legend>
                                        <p>Name</p>
                                    </legend>
                                </Col>
                                <Col xs="8" xl="8">
                                    <input type="Text"
                                        value={this.state.name}
                                        onChange={this.nameHandler}
                                        id="CustomerName" />
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="4" xl="4">
                                    <legend>
                                        <p>Location</p>
                                    </legend>
                                </Col>
                                <Col xs="8" xl="8">
                                        <select class="locationDrop" 
                                           value={this.state.location}
                                            onChange={this.locationHandler}
                                            id="location">
                                            <option value="">Select</option>
                                            <option value="Arya Nagar">Arya Nagar</option>
                                            <option value="Ashok Nagar">Ashok Nagar</option>
                                            <option value="Fazalganj">Fazalganj</option>
                                            <option value="Gumti">Gumti</option>
                                            <option value="Kakadev">Kakadev</option>
                                            <option value="Kausalpuri">Kausalpuri</option>
                                            <option value="Keshavpuram">Keshavpuram</option>
                                            <option value="Lajpat Nagar">Lajpat Nagar</option>
                                            <option value="Medical College">Medical College</option>
                                            <option value="Naveen Nagar">Naveen Nagar</option>
                                            <option value="Pandu Nagar">Pandu Nagar</option>
                                            <option value="Sharda Nagar">Sharda Nagar</option>
                                            <option value="Shastri Nagar">Shastri Nagar</option>
                                            <option value="Swaroop Nagar">Swaroop Nagar</option>
                                            <option value="Vijay Nagar">Vijay Nagar</option>
                                        </select>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="4" xl="4">
                                    <legend>
                                        <p>Address</p>
                                    </legend>
                                </Col>
                                <Col xs="8" xl="8">
                                    <input type="text"
                                        value={this.state.houseNumber}
                                        onChange={this.houseHandler}
                                        id="HouseNumber" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="4" xl="4">
                                    <legend>
                                        <p>Landmark</p>
                                    </legend>
                                </Col>
                                <Col xs="8" xl="8">
                                    <input type="text"
                                        value={this.state.landmark}
                                        onChange={this.landHandler}
                                        id="LandMark" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="4" xl="4">
                                    <legend>
                                        <p>Pin Code</p>
                                    </legend>
                                </Col>
                                <Col xs="8" xl="8">
                                    <input type="text"
                                        value={this.state.pincode}
                                        onChange={this.pincodeHandler}
                                        id="PinCode" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="4" xl="4">
                                    <legend>
                                        <p>Contact Number</p>
                                    </legend>
                                </Col>
                                <Col xs="8" xl="8">
                                    <input type="text"
                                        value={this.state.phone}
                                        onChange={this.phoneHandler}
                                        id="phone" />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div style={{ color: "yellow", paddingTop: "20px", paddingBottom: "20px" }}
                    >
                        Please check your delivery details once, before placing your order.
                    </div>
                </form>
                <Payment paymentAmount={this.props.paymentAmount}
                    place={this.props.place}
                    checkOut={checkOut}
                    data={this.props.data} />
            </div>
        );
    }
}

export default orderForm;