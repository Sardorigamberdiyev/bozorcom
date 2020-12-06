import React from 'react';

import './header-cap.css';


const HeaderCap = () => {
    return (
        <div className="header-cap">
            <div className="cap-container">
                <p>Bozor.<span>com</span>га Хуш келибсиз. Иш вақти: <span>Душ-Якш 9:00 - 17:00</span></p>
                <div className="contact">
                    <i className="icon icon-phone" />
                    <span>Телефон: (+99) 830 00 01 - (+99) 830 00 02</span>
                </div>
            </div>
        </div>
    )
}

export default HeaderCap;