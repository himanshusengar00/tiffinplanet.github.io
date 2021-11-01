import React from 'react';
import Form from './Form'
import './Service.css';
import Footer from '../navigation/footer/footer';
import { NavLink } from 'react-router-dom';


const Service=(props)=> {
    return (
        <div>
            <section className="menuHeader">
                {props.children}
                <p className="menuTitle">Our Service</p>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">Menu </NavLink>
                    </li>
                </ul>
            </section>
            
            <div className="header">
                <h1>Collaborate with me</h1>
                <ul>
                    <li>Vender</li>
                    <li>Catering</li>
                    <li>Cloud Kitchen</li>
                    <li>Tiffin Service</li>
                </ul>
            </div>
            <>
                <Form />
                <Footer />
            </>
        </div>
    );
}
export default Service;

