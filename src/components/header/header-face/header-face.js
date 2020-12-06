import React from 'react';

import './header-face.css';


const HeaderFace = () => {

    return (
        <div className="header-face">
            <div className="face-container">
                <div className="wrapper-nav">
                    <ul>
                        <li>
                            <a href="/">Бош сахифа</a>
                        </li>
                        <li>
                            <a href="/">Биз хакимизда</a>
                        </li>
                        <li>
                            <a href="/">Чегирмалар</a>
                        </li>
                        <li>
                            <a href="/">Биз билан алока</a>
                        </li>
                    </ul>
                </div>
                <div className="img-advertising">
                    <img src="https://sardorigamberdiyev.github.io/bozorcom/images/brand/Layer 611.png" alt="imgLG" />
                </div>
            </div>
        </div>
    )
}

export default HeaderFace;