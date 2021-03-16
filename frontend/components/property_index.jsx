import React from 'react';

function PropertyIndex ({matchingProperties}) {
    console.log(matchingProperties)
    if (!matchingProperties.length) return null;
    return (
        <div className="property-index-main">
            <div>
                <span>{matchingProperties[0].address}</span>
                <span>{matchingProperties[0].price}</span>
                <span>{matchingProperties[0].beds}</span>
                <span>{matchingProperties[0].baths}</span>
            </div>
            <li>HOUSE</li>
            <li>HOUSE</li>
            <li>HOUSE</li>
            <li>HOUSE</li>
            <li>HOUSE</li>
            <li>HOUSE</li>
            <li>HOUSE</li>
            <li>HOUSE</li>
            <li>HOUSE</li>
        </div>
    )
}

export default PropertyIndex;