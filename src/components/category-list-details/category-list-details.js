import React from 'react';
import CategoryListItemDetail from '../category-list-item-detail';

import './category-list-details.css';


const CategoryListDetails = (props) => {
    return (
        <div className="category-list-details">
            <p>{props.numberCategor}</p>
            <ul>
                <li>
                    <CategoryListItemDetail name="Sabzavot va mevalar" />
                    <CategoryListItemDetail name="Tuxum / Sut va sut mahsulotlari" />
                </li>
                <li>
                    <CategoryListItemDetail name="Go'sht va go'sht mahsulotlari" />
                    <CategoryListItemDetail name="Tuxum / Sut va sut mahsulotlari" />
                </li>
                <li>
                    <CategoryListItemDetail name="Yuvish vositalari" />
                    <div><img src="https://sardorigamberdiyev.github.io/bozorcom/images/logo.png" alt="logo" /></div>
                </li>
            </ul>
        </div>
    )
}

export default CategoryListDetails;