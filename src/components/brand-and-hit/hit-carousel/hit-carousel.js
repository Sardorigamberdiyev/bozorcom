import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './hit-carousel.css';


const HitCarousel = () => {

    const responsive = {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        767: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 5
        }
    }

    return (
        <div className="hit-carousel">
            <div className="hit-header">
                <h2>хитлар</h2>
                <hr />
                <div>
                    <span>Хамма хитлар &#187;</span>
                    <button type="button"><i className="icon icon-arrow-left" /></button>
                    <button type="button"><i className="icon icon-arrow-right" /></button>
                </div>
            </div>
            <AliceCarousel 
            mouseTracking
            responsive={responsive} 
            autoPlay={true}
            disableDotsControls={true}
            disableButtonsControls={true}
            infinite={true}
            autoPlayInterval={15000}
            animationDuration={500} >
                <div className="card">
                    <div className="card-img">
                        <img src="https://sardorigamberdiyev.github.io/bozorcom/images/Layer 613.png" alt="img653"/>
                        <span className="discount">20%</span>
                    </div>
                    <div className="card-body">
                        <h4>Музлаткич LG 2050</h4>
                        <p>
                            <span><del>2.800.000</del></span> 2.500.000 сум
                        </p>
                    </div>
                    <div className="card-footer">
                        <button className="button"><i className="icon icon-remove" /></button>
                        <span>0</span>
                        <button className="button"><i className="icon icon-plus" /></button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="https://sardorigamberdiyev.github.io/bozorcom/images/Layer 613.png" alt="img653"/>
                        <span className="discount">20%</span>
                    </div>
                    <div className="card-body">
                        <h4>Музлаткич LG 2050</h4>
                        <p><span>2.800.000</span> 2.500.000 сум</p>
                    </div>
                    <div className="card-footer">
                        <button className="button"><i className="icon icon-remove" /></button>
                        <span>0</span>
                        <button className="button"><i className="icon icon-plus" /></button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="https://sardorigamberdiyev.github.io/bozorcom/images/Layer 613.png" alt="img653"/>
                        <span className="discount">20%</span>
                    </div>
                    <div className="card-body">
                        <h4>Музлаткич LG 2050</h4>
                        <p><span>2.800.000</span> 2.500.000 сум</p>
                    </div>
                    <div className="card-footer">
                        <button className="button"><i className="icon icon-remove" /></button>
                        <span>0</span>
                        <button className="button"><i className="icon icon-plus" /></button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="https://sardorigamberdiyev.github.io/bozorcom/images/Layer 613.png" alt="img653"/>
                        <span className="discount">20%</span>
                    </div>
                    <div className="card-body">
                        <h4>Музлаткич LG 2050</h4>
                        <p><span>2.800.000</span> 2.500.000 сум</p>
                    </div>
                    <div className="card-footer">
                        <button className="button"><i className="icon icon-remove" /></button>
                        <span>0</span>
                        <button className="button"><i className="icon icon-plus" /></button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="https://sardorigamberdiyev.github.io/bozorcom/images/Layer 613.png" alt="img653"/>
                        <span className="discount">20%</span>
                    </div>
                    <div className="card-body">
                        <h4>Музлаткич LG 2050</h4>
                        <p><span>2.800.000</span> 2.500.000 сум</p>
                    </div>
                    <div className="card-footer">
                        <button className="button"><i className="icon icon-remove" /></button>
                        <span>0</span>
                        <button className="button"><i className="icon icon-plus" /></button>
                    </div>
                </div>
            </AliceCarousel>
        </div>
    )
}

export default HitCarousel;