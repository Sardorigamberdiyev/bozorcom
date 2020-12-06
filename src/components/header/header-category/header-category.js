import React from 'react';
import CategoryList from '../../category-list';

import './header-category.css';


const HeaderCategory = () => {
    return (
        <nav className="header-category">
            <div className="wrapper-category">
                <div className="cap-category">
                    <span>категориялар</span>
                    <i className="icon icon-list" />
                </div>
                <CategoryList />
            </div>
        </nav>
    )
}

export default HeaderCategory;