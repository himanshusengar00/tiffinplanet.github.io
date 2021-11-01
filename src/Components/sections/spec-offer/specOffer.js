import React from 'react';
import './specOffer.css';


const specOffer = (props) => {
    return (
        <div className="specOffer">
            <div className="offerArrange">
                <p className="offerHead">{props.data.title}</p>
                <p className="offerContent">{props.data.content}</p>
                <p className="offerStarting"> at </p>
                <p className="offerDigit">&#x20B9; {props.data.price}</p>
                <div className="offerButton">
              
                </div>
            </div>
        </div>
    );
}

export default specOffer;