import React, {useState} from 'react';
import PropertyIndexItem from './property_index_item';

function PropertyIndex ({properties}) {
    const propertiesPerPage = 5;
    const [currentPage, setCurrentPage] = useState(0);
    const propertiesOnCurrentPage = properties.matching.slice(currentPage, propertiesPerPage);
    const matchingProperties = propertiesOnCurrentPage.map( property => {
        return <PropertyIndexItem key={property.id} property={property} />
    });
    const similarProperties = properties.similar.map( property => {
        return <PropertyIndexItem key={property.id} property={property} />
    });
    const hideArrow = properties.matching.length || properties.similar.length ? "" : "hidden";
    const similarHeaderHidden = properties.similar.length ? "" : "hidden";
    const noResultsText = properties.hasSearched && !properties.matching.length ? 
            <h4 className="no-results">Sorry! We found no exact matches</h4> :
            <h4>No results yet</h4>;

    return (
        <div className="property-index-main">
            <div className={`arrow-wrapper ${hideArrow}`}>
                <i className="arrow down"></i>
                <span>Properties Below</span>
            </div>
            <div className="matches-wrapper">
                <h3 className="match-header">Search Results</h3>
                {noResultsText}
                {matchingProperties}
                <div className="go-back">
                    View Previous
                </div>
                <div className="more-properties">
                    More Properties
                </div>
            </div>
            <div className={`matches-wrapper ${similarHeaderHidden}`}>
                <h3 className="match-header">What about these Properties?</h3>
                {similarProperties}
            </div>
        </div>
    )
}

export default PropertyIndex;