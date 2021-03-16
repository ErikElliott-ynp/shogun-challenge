import React from 'react';

function Header () {
    return (
        <div className="header-main">
            <a className="header-link" href="">
                <div className="logo-wrapper">
                    <img className="logo" src={window.logoUrl} alt=""/>
                </div>
                <h3 className="header-title">Shogun Challenge</h3>
            </a>
        </div>
    )
}

export default Header;