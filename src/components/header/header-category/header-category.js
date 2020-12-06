import React from 'react';
import CategoryList from '../../category-list';

import './header-category.css';


const HeaderCategory = (props) => {

    const { isOpenShow, isShow } = props;

    return (
        <nav className="header-category">
            <div className="wrapper-category">
                <div className="cap-category" onClick={() => isOpenShow(!isShow)}>
                    <span>категориялар</span>
                    <i className="icon icon-list" />
                </div>
                <CategoryList />
            </div>
        </nav>
    )
}

export default HeaderCategory;