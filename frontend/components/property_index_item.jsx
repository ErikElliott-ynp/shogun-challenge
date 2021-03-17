import React from 'react'

function PropertyIndexItem({property}) {
    return (
        <div className="property-item-main">
            <div className="item-left-main">
                <img src={window.homeImg} className="home-img"/>
                <div className="left-item-info">
                    <div className="address">
                        <span>{property.address}</span>
                        <br/>
                        <span>{property.city}, {property.state} {property.postalCode}</span>
                    </div>
                    <span style={{ color: "green" }}>$ {property.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                </div>
            </div>
            <div className="right-item-info">
                <div className="property-state">
                    <span>Beds: {property.beds} <i className="fas fa-prop fa-bed"></i></span>
                    <span>Baths: {property.baths} <i className="fas fa-bath"></i></span>
                    <br/>
                    <span>Sq Ft: {property.squareFeet}</span>
                </div>
                <a href={property.url} target="_blank" className="redfin-link">Wanna Know More?</a>
            </div>
        </div>
    )
}

export default PropertyIndexItem;