import React, {useState, useRef, useEffect} from 'react';
import PropertyIndexItem from './property_index_item';

function PropertyIndex ({properties}) {
    const propertiesPerPage = 7;
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        setCurrentPage(0);
    }, [properties.matching.length]);
    
    const propertiesOnCurrentPage = properties.matching.slice(currentPage, currentPage + propertiesPerPage);
    const matchingProperties = propertiesOnCurrentPage.map( property => {
        return <PropertyIndexItem key={property.id} property={property} />
    });
    const similarProperties = properties.similar.map( property => {
        return <PropertyIndexItem key={property.id} property={property} />
    });
    const matchingLength = properties.matching.length;
    
    const anchorEl = useRef(null);
    const hideArrow = matchingLength || properties.similar.length ? "" : "hidden";
    const similarHeaderHidden = properties.similar.length ? "" : "hidden";
    const noResultsText = properties.hasSearched ? 
            (!matchingLength ? <h4 className="no-results">Sorry! We found no matches</h4>: null) :
            <h4>Please make your first search above</h4>;
            
    const pageForward = () => {
        if (currentPage >= matchingLength - propertiesPerPage) return;
        setCurrentPage((prevPage) => {
            const newPage = prevPage + propertiesPerPage;
            return newPage;
        });
        if (currentPage < matchingLength - propertiesPerPage) anchorEl.current.scrollIntoView({behavior: 'smooth'})
    };
    const pageBack = () => {
        setCurrentPage((prevPage) => {
            const newPage = prevPage - propertiesPerPage >= 0 ? prevPage - propertiesPerPage : 0;
            return newPage;
        });
        // this scroll feature could actually be annoying. Need user feedback
       if (currentPage) anchorEl.current.scrollIntoView({ behavior: 'smooth' });
    };
    const previousDisabled = currentPage ? "" : "gray";
    const buttonsHidden = matchingLength ? "" : "hidden";
    const moreDisabled = currentPage + propertiesPerPage >= matchingLength ? "gray" : "";

    return (
        <div className="property-index-main">
            <div className={`arrow-wrapper ${hideArrow}`}>
                <i className="arrow down"></i>
                <span>Properties Below</span>
            </div>
            <div className="matches-wrapper">
                <h3 ref={anchorEl} className="match-header">Search Results</h3>
                {noResultsText}
                {matchingProperties}
                <div className={`page-btns ${buttonsHidden}`}>
                    <div
                        onClick={pageBack}
                        className={`paginate-btn ${previousDisabled}`}
                    >
                        View Previous
                    </div>
                    <div onClick={pageForward} className={`paginate-btn more-btn ${moreDisabled}`}>
                        View More 
                    </div>
                </div>
            </div>
            <div className={`matches-wrapper ${similarHeaderHidden}`}>
                <h3 className="match-header">What about these similar Properties?</h3>
                {similarProperties}
            </div>
        </div>
    )
}

export default PropertyIndex;