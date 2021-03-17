import React, {useRef} from 'react';
import PropertyIndexItem from './property_index_item';

function PropertyIndex ({properties}) {
    const matchingProperties = properties.matching.map( property => {
        return <PropertyIndexItem key={property.id} property={property} />
    });
    const similarProperties = properties.similar.map( property => {
        return <PropertyIndexItem key={property.id} property={property} />
    });
   const hideArrow = properties.matching.length || properties.similar.length ? "" : "hidden";

    // if (!matchingProperties.length) return null;
    return (
        <div className="property-index-main">
            
            <div className={`arrow-wrapper ${hideArrow}`}>
                <i className="arrow down"></i>
                <span>Properties Below</span>
            </div>
            <div className="matches-wrapper">
                <h3 className="match-header">Property Matches</h3>
                {matchingProperties}
            </div>
            <div className="matches-wrapper">
                <h3 className="match-header">Here are similar properties you might be interested in</h3>
                {similarProperties}
            </div>
        </div>
    )
}

export default PropertyIndex;