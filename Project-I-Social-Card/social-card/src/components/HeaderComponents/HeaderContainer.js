import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';


function HeaderContainer() {
    return(
        <div className="header-container">
            <div className="image-container">
                <ImageThumbnail />
            </div>
            <div className="header-text-container">
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    )
}

export default HeaderContainer;


