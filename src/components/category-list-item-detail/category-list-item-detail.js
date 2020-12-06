import React from 'react';

import './category-list-item-detail.css';


const CategoryListItemDetail = (props) => {
    const { name, ancd } = props;
    return (
        <div className="category-list-item-detail">
            <h4>{ancd + " " + name}</h4>
            <ul>
                <li>
                    <a href="/"> Hammasi</a>
                </li>
                <li>
                    <a href="/">Sabzavotlar</a>
                </li>
                <li>
                    <a href="/">Meva</a>
                </li>
                <li>
                    <a href="/">Ko'katlar</a>
                </li>
                <li>
                    <a href="/">Quritilgan mevalar/Yong'oqlar</a>
                </li>
            </ul>
        </div>
    )
}

export default CategoryListItemDetail;