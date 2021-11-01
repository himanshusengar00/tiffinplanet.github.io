import React, { Component } from 'react';
import './section.css';
import Tiles from '../section-tiles/tiles/tiles';
import Specs from '../section-specs/specs';
import SpecOffer from '../spec-offer/specOffer';
import Reviews from '../Testimonial/Reviews';
import Footer from '../../navigation/footer/footer';
import Carousel from '../../carousel/carousel';
class section1 extends Component {

    render() {
        return (
            <div style={{ overflowY: "hidden" }}>
                <section className="Header">
                    {this.props.children}
                </section>
                <section>
                    <Carousel />
                </section>
                <section className="sec-tiles">
                    <Tiles data={this.props.data.cards} />
                </section>
                <section className="specs">
                    <Specs />
                </section>
                <section className="specOffer">
                    <SpecOffer data={this.props.data.mainoffer} />
                </section>
                <section className="sec-stacked">
                    <Reviews />
                </section>
                <Footer />
            </div>
        );
    }

}
export default section1;