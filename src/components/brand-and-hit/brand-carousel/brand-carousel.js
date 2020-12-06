import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './brand-carousel.css';


const BrandCarousel = () => {

    const brands = [
        <img src="/images/brand/Layer 607.png" alt="gree" />,
        <img src="/images/brand/Layer 608.png" alt="huawai" />,
        <img src="/images/brand/Layer 609.png" alt="mi" />,
        <img src="/images/brand/Layer 610.png" alt="samsung" />,
        <img src="/images/brand/Layer 611.png" alt="lg" />,
        <img src="/images/brand/Layer 612.png" alt="hp" />,
        <img src="/images/brand/Layer 607.png" alt="gree" />,
        <img src="/images/brand/Layer 608.png" alt="huawai" />,
        <img src="/images/brand/Layer 609.png" alt="mi" />,
        <img src="/images/brand/Layer 610.png" alt="samsung" />,
    ];

    const responsive = {
        0: {
            items: 2
        },
        576: {
            items: 4
        },
        767: {
            items: 6
        },
        992: {
            items: 8
        },
        1200: {
            items: 10
        }
    }

    return (
        <div className="brand-carousel">
            <div className="brand-header">
                <h2>брендлар</h2>
                <hr />
                <div>
                    <span>Хамма Брендлар &#187;</span>
                    <button type="button"><i className="icon icon-arrow-left" /></button>
                    <button type="button"><i className="icon icon-arrow-right" /></button>
                </div>
            </div>
            <AliceCarousel 
            mouseTracking
            responsive={responsive}
            disableDotsControls={true}
            infinite={true}
            disableButtonsControls={true}
            autoPlay={true}
            autoPlayInterval={7000}
            animationDuration={500} >
                <a href="/" className="brand-item">
                    <img src="/images/brand/Layer 607.png" alt="gree" />
                </a>
                <a href="/" className="brand-item">
                    <img src="/images/brand/Layer 608.png" alt="huawai" />
                </a>
                <a href="/" className="brand-item">
                    <img src="/images/brand/Layer 609.png" alt="mi" />
                </a>
                <a href="/" className="brand-item">
                    <img src="/images/brand/Layer 610.png" alt="samsung" />
                </a>
                <a href="/" className="brand-item">
                    <img src="/images/brand/Layer 611.png" alt="lg" />
                </a>
                <a href="/" className="brand-item">
                    <img src="/images/brand/Layer 612.png" alt="hp" />
                </a>
                <a href="/" className="brand-item">
                    <img src="/images/brand/Layer 607.png" alt="gree" />
                </a>
                <a href="/" className="brand-item">
                    <img src="/images/brand/Layer 608.png" alt="huawai" />
                </a>
                <a href="/" className="brand-item">
                    <img src="/images/brand/Layer 609.png" alt="mi" />
                </a>
                <a href="/" className="brand-item">
                    <img src="/images/brand/Layer 612.png" alt="hp" />
                </a>
            </AliceCarousel>
        </div>
    )
}

export default BrandCarousel;