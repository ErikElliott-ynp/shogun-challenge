import React from 'react';
import { PROPERTY_IMAGE_URLS } from "../util/constants";

function PropertyIndexItem({property, resultNumber}) {
    Object.freeze(PROPERTY_IMAGE_URLS);

    const squareFeet = property.squareFeet ? property.squareFeet : "-";
    const beds = property.beds ? property.beds : "-";
    const baths = property.baths ? property.baths : "-";
    let imgUrl = window.homeImg;
    // Reassign the default home image for different property types
    if (PROPERTY_IMAGE_URLS[property.propertyType]) imgUrl = PROPERTY_IMAGE_URLS[property.propertyType];

    return (
        <div className="property-item-main">
            <div className="item-left-main">
                <img loading="lazy" src={imgUrl} className="home-img"/>
                <div className="left-item-info">
                    <div className="address">
                        <span>{property.address}</span>
                        <br/>
                        <span>{property.city}, {property.state} {property.postalCode}</span>
                        <br/>
                        <span className="property-type">{property.propertyType}</span>
                    </div>
                    {/* Add commas to the property price */}
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
            <span className="item-result-number">{resultNumber}</span>
        </div>
    )
}

export default PropertyIndexItem;