import React, { Component } from 'react';
import './OrderOnline.css';
import axios from 'axios';
import Toolbar from '../../Components/navigation/toolbar/toolbar';
import { NavLink } from 'react-router-dom';
import Items from '../../Components/Order/Items/Items';
import Form from '../../Components/Order/orderForm/orderForm';
import Footer from '../../Components/navigation/footer/footer';
class OrderOnline extends Component {

    placeOrder = (obj) => {
        var copy = {
            ...obj, food: this.props.data, time: new Date().toString()
        };

        if (this.props.data.length > 0) {
            axios.post("https://tiffinplanet-527d7-default-rtdb.firebaseio.com/.json", copy).then(() => alert("Your Order is Placed!"));
        }
        else {
            alert("Please add some item before");
        }
    }

    render() {
        return (
            <div className="OrderOnline">
                <section className="Order">
                    <Toolbar count={this.props.count} />
                    <p className="OrderHead">Order Online</p>
                    <div>
                        <NavLink style={{backgroundColor: 'transparent', color: 'white'}} to="/">Home</NavLink>
                        <NavLink to="/menu">Menu</NavLink>
            
                    </div>
                </section>
                <section className="Orderitems">
                    <Items data={this.props.data} />
                </section>
                <section className="order-sec">
                    <Form
                        paymentAmount={this.props.data.map((item) => item.price)}
                        place={this.placeOrder}
                        data={this.props.data}
                    />
                </section>
                <Footer />
            </div>
        );
    }
}
export default OrderOnline;