import React from 'react';
import CategoryList from '../../category-list';

import './header-face.css';


const HeaderFace = () => {

    return (
        <div className="header-face">
            <div className="face-container">
                <CategoryList />
                <div className="img-advertising">
                    <img src="/images/brand/Layer 611.png" alt="imgLG" />
                </div>
            </div>
        </div>
    )
}

export default HeaderFace;