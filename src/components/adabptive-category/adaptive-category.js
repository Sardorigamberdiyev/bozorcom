import React from 'react';
import Categor from '../../utils/categor';

import './adaptive-category.css';


const AdaptiveCategory = (props) => {

    const { isShow, isOpenShow} = props;

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
    ];

    const isOpen = isShow ? '0' : '-410px'

    return (
        <div className="adaptive-category" style={{left: isOpen}}>
            <div>
                <button className="btn-close" onClick={() => isOpenShow(!isShow)} >&#9747;</button>
                <h2>категориялар</h2>
                <ul>
                    {
                        allCategory.map((item, idx) => {
                            return (
                                <li key={idx}>
                                    <a href="/"> 
                                        <i className={item.styleName} />
                                        <span>{item.categorName}</span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default AdaptiveCategory;