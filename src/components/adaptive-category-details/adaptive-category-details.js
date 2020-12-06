import React from 'react';
import CategoryListItemDetail from '../category-list-item-detail';

import './adaptive-category-details.css';


const AdaptiveCategoryDetails = (props) => {
    return (
        <div className="adaptive-category-details">
            <ul>
                <li>
                    <CategoryListItemDetail name="Sabzavot va mevalar" ancd={props.ancd} />
                    <CategoryListItemDetail name="Tuxum / Sut va sut mahsulotlari" ancd={''} />
                </li>
                <li>
                    <CategoryListItemDetail name="Go'sht va go'sht mahsulotlari" ancd={''} />
                    <CategoryListItemDetail name="Tuxum / Sut va sut mahsulotlari" ancd={''} />
                </li>
                <li>
                    <CategoryListItemDetail name="Yuvish vositalari" ancd={''} />
                </li>
            </ul>
        </div>
    )
}

export default AdaptiveCategoryDetails;