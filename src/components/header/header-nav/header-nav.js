import React from 'react';

import './header-nav.css';


const HeaderNav = (props) => {

    const { isOpenShow, isShow } = props;

    return (
        <nav className="header-nav">
            <div className="nav-container">
                <div className="cap-category" onClick={() => isOpenShow(!isShow)}>
                    <span>категориялар</span>
                    <i className="icon icon-list" />
                </div>
                <div>
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
            </div>
        </nav>
    )
}

export default HeaderNav;