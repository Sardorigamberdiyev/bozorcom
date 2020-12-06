import React from 'react';
import { HeaderContainer } from '../../containers';
import { BrandCarousel, HitCarousel } from '../brand-and-hit';

import './app.css';

const App = () => {
    return (
        <div className="app">
            <HeaderContainer />
            <div className="app-container">
                <BrandCarousel />
                <HitCarousel />
            </div>
        </div>
    )
}

export default App;