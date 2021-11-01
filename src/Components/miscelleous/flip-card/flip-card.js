import React from 'react';
import './flip-card.css';
import { Link } from 'react-router-dom';

const flip_card = (props) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    {props.front}
                    <div>
                        <h1>A small contribution for Kanpur</h1>
                        <div style={{color:"white",fontWeight:"lighter",fontFamily:"initial" }}>
                            <h2>Feel the taste like ghar ka khana</h2>
                            <h3>Brought at your doorsteps by Tiffin Planet</h3>
                        </div>
                    </div>
                </div>
                <div className="flip-card-back">
                    {props.back}
                    <h1 style={{ paddingTop: "72px", fontWeight: "50px" }}>What are special</h1>
                    <ul>
                        {Object.keys(props.lis).map(each => <li key={each}>{each}</li>)}
                    </ul>
                    <Link to="/home" >Happy Ordering</Link>
                </div>
            </div>
        </div>
    );
}
export default flip_card;