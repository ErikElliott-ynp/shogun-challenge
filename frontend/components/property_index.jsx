import React from 'react';
import PropertyIndexItem from './property_index_item';

function PropertyIndex ({matchingProperties}) {
    const matches = matchingProperties.map( property => {
        return <PropertyIndexItem key={property.id} property={property} />
    })
    return (
        <div className="property-index-main">
            <div className="exact-matches-main">
                <h3 className="exact-match-header">Property Matches</h3>
                {matches}
            </div>
            <div className="suggestions-main">
                <h3>Here are similar properties you might be interested in</h3>
            </div>
        </div>
    )
}

export default PropertyIndex;