import React from 'react'

function PropertyIndexItem({property}) {
    const squareFeet = property.squareFeet ? property.squareFeet : "-";
    const beds = property.beds ? property.beds : "-";
    const baths = property.baths ? property.baths : "-";

    return (
        <div className="property-item-main">
            <div className="item-left-main">
                <img src={window.homeImg} className="home-img"/>
                <div className="left-item-info">
                    <div className="address">
                        <span>{property.address}</span>
                        <br/>
                        <span>{property.city}, {property.state} {property.postalCode}</span>
                        <br/>
                        <span className="property-type">{property.propertyType}</span>
                    </div>
                    <span style={{ color: "green" }}>$ {property.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                </div>
            </div>
            <div className="right-item-info">
                <div className="property-state">
                    <div className="bed-bath-wrapper">
                        <span>Beds: {beds} <i className="fas fa-prop fa-bed"></i></span>
                        <span>Baths: {baths} <i className="fas fa-prop fa-bath"></i></span>
                    </div>
                    <span>Sq Ft: {squareFeet}</span>
                </div>
                <a href={property.url} target="_blank" className="redfin-link">Want to Know More?</a>
            </div>
        </div>
    )
}

export default PropertyIndexItem;