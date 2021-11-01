import React from 'react';
import Footer from '../navigation/footer/footer';
import { Table } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './terms.css';




export default function Terms() {
    return (
        <div>
            <section className="menuHeader">
                <p className="menuTitle">Terms and Conditions</p>
                <ul>
                    <li>
                        <NavLink to="/">Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">Menu </NavLink>
                    </li>

                </ul>
            </section>
            <div className="terms">
                
                <h1 className="ordr-tm" >Delivery time</h1>
                <Table striped bordered hover className="table">
                    <thead>
                        <tr>
                            <th>Meal-type</th>
                            <th>Mon-Sat</th>
                            <th>Sun</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lunch</td>
                            <td>11:30 to 2:00 PM</td>
                            <td>11:00 AM to 1:30 PM</td>
                        </tr>
                        <tr>
                            <td>Dinner</td>
                            <td>7:00 PM to 9:00 PM</td>
                            <td>Closed</td>
                        </tr>
                        <tr>
                            <td style={{color: "red"}}colSpan="3">NOTE: Every sunday evening, we are closed...
                                <p> Min order amount: Rs: 65/- </p>
                            </td>

                        </tr>
                    </tbody>
                </Table>

                {/*second table started (cut off timing)*/}
                <h1 className="ordr-cut">Order/Cancellation </h1>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Meal-type</th>
                            <th>Mon-Sun</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lunch</td>
                            <td>Before 8:00 PM</td>

                        </tr>
                        <tr>
                            <td>Dinner</td>
                            <td>Before 3:00 PM</td>
                        </tr>
                        <tr>
                            <td style={{color: "red"}}  colSpan="3">
                                <p>NOTE: Cancellation done only given time period </p>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className="terms-section"><h1>Read below</h1></div>
            <div style={{
                color:"white",
                backgroundColor:"peru",
                fontFamily:"serif",
                fontSize:"15px",
                fontWeight:"bolder",
                margin: "0px 35px 10px 35px",
                padding:"40px 10px 10px 10px"
                
                }}>
               
                 <p>● Tiffin Planet will not give any meals on credit. Once the customer's advance payment is exhausted the meal will be stopped after giving prior intimation to the customer. No reasons on the part of the customer would be entertained in this regard.</p>
                 <p>● Advance payment will be accepted before start to tiffin service.</p>
                 <p>● Meal Type and Plan once selected cant be changed into any other plan.</p>
                 <p>● Meal duration once selected cant be changed. For Eg: Monthly order cant be changed in to weekly order.</p>
                 <p>● All order , cancellation , extra meal or customization should be communicated a day prior on SMS / Call / Whatsapp before 8:00 AM for Lunch and before 3:00 PM for Dinner. After cut off time the amount will be non-refundable. and tiffin will be shared with unprivileged children.</p>
                 <p>● Any communication regarding order / cancellation / changes / complaints etc. Needs to be done through Call or WhatsApp only.</p>
                 <p>● Meals will not be delivered on public holidays. If there is/are more holidays in the month apart from the above or sudden closed then they will be informed either via sms or phone call or whatsapp.</p>
                 <p>● Meal once delivered cannot be returned or cancelled under any circumstances.</p>
                 <p>● Refund Policy : - Customers can initiate the Refund & once refund is approved within 2 days. refund will be processed within 7 days and amount would be reflected in customer's bank account.</p>
                 <p>● Refunds policy is applicable only for more than 28 meals, no deals/offer will be accounted.</p>
                 <p>● Delivery Boy would drop the customer's meal at the reception / security gate in case of his unavailability. Tiffin Planet won't be responsible for any subsequent misplacement/theft of the meal.</p>
                <p>● Hot tiffin box security money Rs. 350 /- if damage or lost tiffin . Amount will be deducted. </p>
                <p>● After finishing the meal, hot tiffin box has to be handover to the delivery boy at the time of your next meal delivery. Hot tiffin box must be return as clean & washed so it is to be use for next meal.</p>
                <p>● In case of any non-payment or default , Tiffin Planet reserves the right of cancelling / holding the tiffin service of any customer. </p>
                <p>● "If the food is cooked and due to some circumstance beyond our control like heavy rain / roits, the tiffin will be shared with the underprivileged children and the amount will be non-refundable."</p>
                <p>● To start tiffin service through website , Call or WhatsApp.</p>
                <p>● Tiffin Planet reserves the all right of any kind of changes in service and menu.</p>
                <p>● Subject to 'Uttar Pradesh' jurisdiction only.</p>
            </div>

            <>
                <Footer />
            </>
        </div>
    );
}

