import React from 'react';

import './header-eyes.css';


const HeaderEyes = () => {
    return (
        <div className="header-eyes">
            <div className="eyes-container">
                <a href="/">
                    <img src="/images/logo.png" alt="logo" />
                </a>
                <div className="search-panel">
                    <input type="text" placeholder="қидириш" />
                    <div className="select-wrapper">
                        <select name="category">
                            <option value="allcategor">Барча категориялар</option>
                            <option value="categor-one">Категория 1</option>
                            <option value="categor-two">Категория 2</option>
                            <option value="categor-three">Категория 3</option>
                        </select>
                    </div>
                    <button type="button"><i className="icon icon-search" /></button>
                </div>
                <div className="auth-cart" >
                    <button type="button"><i className="icon icon-user" /></button>
                    <button type="button">
                        <i className="icon icon-cart" />
                        <span className="count-cart">3</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeaderEyes;