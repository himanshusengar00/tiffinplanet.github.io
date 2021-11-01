import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Spec from './spec/spec';
import clock from '../../../Assests/icons/icon_specs/clock.png';
import leaf from '../../../Assests/icons/icon_specs/leaf.png';
import basket from '../../../Assests/icons/icon_specs/basket.png';
import groceries from '../../../Assests/icons/icon_specs/groceries.png';

const specs = () => {
    return (
        <Container>
            <div className="why">
                <Row>
                    <Col>
                        <h1>Why Tiffin planet?</h1>
                        <h2>read below</h2>
                    </Col>
                </Row>
            </div>
            <div className="keyValue">
                <Row>
                    <Col>
                        <Spec src={basket} head="Hygenic" content="We prepare the meals in a clean and hygienic environment. " />
                    </Col>
                    <Col>
                        <Spec src={clock} head="Delivery on time" content="Simply place order we ensure to deliver your meal packet on time." />
                    </Col>
                    <Col>
                        <Spec src={leaf} head="Healthy" content="We try to cook food in less oil. We have ensured to include only healthy and nutritious ingredients in our cooking." />
                    </Col>
                    <Col>
                        <Spec src={groceries} head="Amazing variety" content="Always try to deliver exciting food so we keep updating our menu, we are always focused on quality" />
                    </Col>
                </Row>
            </div>

        </Container>


    );
}

export default specs;