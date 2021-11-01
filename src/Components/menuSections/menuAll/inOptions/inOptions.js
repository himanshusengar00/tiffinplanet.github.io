import React from 'react';
import './inOptions.css';
import Inoption from './inOption/inOption';
import { Container, Row, Col } from 'reactstrap';

let toShow = [];
const inOptions = (props) => {
    if (props.data !== undefined && props.data !== null) {

        toShow = Object.keys(props.data).map(name => {
            let cnt = props.data[name].content !== undefined ? props.data[name].content : null;
            let img = props.data[name].image !== undefined ?
                props.data[name].image : "https://rukminim1.flixcart.com/image/416/416/jyq5oy80/lunch-box/u/h/h/chic-4-stainless-steel-tiffin-lunch-box-with-4-containers-300-ml-original-imafgkr9hdfzgtcr.jpeg?q=70";
            return (<Col key={name}>
                <Inoption add={props.adding} head={name} image={img} price={props.data[name].price} content={cnt} />
            </Col>
            )
        })
    }
    return (
        <div className="inOptions">
            <p className="inOptionsHead">{props.selected}</p>
            <Container>
                <Row>
                    {toShow}
                </Row>
            </Container>
        </div>
    );
}
export default inOptions;