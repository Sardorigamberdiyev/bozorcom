import React from 'react';
import CategoryListItemDetail from '../category-list-item-detail';

import './category-list-details.css';


const CategoryListDetails = (props) => {
    return (
        <div className="category-list-details">
            <p>{props.numberCategor}</p>
            <ul>
                <li>
                    <CategoryListItemDetail name="Sabzavot va mevalar" ancd="" />
                    <CategoryListItemDetail name="Tuxum / Sut va sut mahsulotlari" ancd="" />
                </li>
                <li>
                    <CategoryListItemDetail name="Go'sht va go'sht mahsulotlari" ancd="" />
                    <CategoryListItemDetail name="Tuxum / Sut va sut mahsulotlari" ancd="" />
                </li>
                <li>
                    <CategoryListItemDetail name="Yuvish vositalari" ancd="" />
                    <div><img src="https://sardorigamberdiyev.github.io/bozorcom/images/logo.png" alt="logo" /></div>
                </li>
            </ul>
        </div>
    )
}

export default CategoryListDetails;