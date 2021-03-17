import React from 'react'

function PropertyIndexItem({property}) {
    return (
        <div className="property-item-main">
            <span>{property.address}</span>
            <span>{property.city}</span>
            <span>{property.state}</span>
            <span>{property.price}</span>
            <span>{property.beds}</span>
            <span>{property.baths}</span>
        </div>
    )
}

export default PropertyIndexItem;