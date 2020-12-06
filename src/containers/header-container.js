import React from 'react';
import { HeaderCap, HeaderEyes, HeaderNav, HeaderFace } from '../components/header';
import AdaptiveCategory from '../components/adabptive-category';
import { useState } from 'react';

const HeaderContainer = () => {
    const [isShow, setIsShow] = useState(false);

    const isOpenShow = (isOpen) => {
        setIsShow(isOpen);
    }

    return (
        <header>
            <HeaderCap />
            <HeaderEyes />
            <HeaderNav isOpenShow={isOpenShow} isShow={isShow} />
            <HeaderFace />
            <AdaptiveCategory isOpenShow={isOpenShow} isShow={isShow} />
        </header>
    )
}

export default HeaderContainer;