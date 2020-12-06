import React from 'react';
import CategoryListDetails from '../category-list-details';
import Categor from '../../utils/categor';

import './category-list.css';

const CategoryList = () => {

    const allCategory = [
        new Categor('Озик овкат махсулотлари', 'icon icon-monitor', 1),
        new Categor('Маиший техника воситалари', 'icon icon-mobile', 2),
        new Categor('Телефон, гаджет, аксессуарлар', 'icon icon-ball', 3),
        new Categor('Маиший техника', 'icon icon-leaf', 4),
        new Categor('Ошхона техникаси', 'icon icon-cutlery', 5),
        new Categor('Спорт анжомлари', 'icon icon-monitor', 6),
        new Categor('Гўзаллик ва саломатлик', 'icon icon-photography', 7),
        new Categor('Авто жиҳозлар', 'icon icon-plug', 8),
        new Categor('Барчаси офис, уй ва боғ учун', 'icon icon-headphones', 9),
        new Categor('Болалар учун ўйинчоқ ва маҳсулотлар', 'icon icon-apple', 10),
    ]

    return (
        <div className="category-list">
            <ul>
                {
                    allCategory.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <i className={item.styleName} />
                                <span>{item.categorName}</span>
                                <CategoryListDetails numberCategor={item.number} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default CategoryList;