import React, { useState } from 'react';
import { HeaderCap, HeaderEyes, HeaderCategory, HeaderFace } from '../components/header';
import AdaptiveCategory from '../components/adaptive-category';

const HeaderContainer = () => {
    const [isShow, setIsShow] = useState(false);

    const isOpenShow = (isOpen) => {
        const linksCategory = document.querySelectorAll('.adaptive-category .link-category');
        setIsShow(isOpen);

        for (let i = 0; i < linksCategory.length; i++) {
            linksCategory[i].classList.remove('active-link');
        }
    };


    return (
        <header>
            <HeaderCap />
            <HeaderEyes isOpenShow={isOpenShow} isShow={isShow} />
            <div style={{
                width: '90%',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <HeaderCategory />
                <HeaderFace />
            </div>
            <AdaptiveCategory isOpenShow={isOpenShow} isShow={isShow} />
        </header>
    )
}

export default HeaderContainer;