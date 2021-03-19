import React, {useState, useRef, useEffect} from 'react';
import PropertyIndexItem from './property_index_item';

function PropertyIndex ({properties}) {
    // Paginate here in the Component instead of in the backend due to small data set and to try pagination in React
    const propertiesPerPage = 7;
    const [currentPage, setCurrentPage] = useState(0);
    // reset pagination on new search
    useEffect(() => {
        setCurrentPage(0);
    }, [properties.matching.length]);
    
    const propertiesOnCurrentPage = properties.matching.slice(currentPage, currentPage + propertiesPerPage);
    const matchingProperties = propertiesOnCurrentPage.map( (property, i) => {
        return <PropertyIndexItem 
                    key={property.id}
                    resultNumber={i + 1 + currentPage}
                    property={property} 
                />
    });
    const similarProperties = properties.similar.map( (property, i) => {
        return <PropertyIndexItem key={property.id} resultNumber={i+1} property={property} />
    });
    const matchingLength = properties.matching.length;
    // use this ref scroll up on page change
    const anchorEl = useRef(null);
    const hideArrow = matchingLength || properties.similar.length ? "" : "hidden";
    const similarHeaderHidden = properties.similar.length ? "" : "hidden";
    const noResultsText = properties.hasSearched ? 
            (!matchingLength ? <h4 className="no-results">Sorry! We found no matches</h4>: null) :
            <h4>Please make your first search above</h4>;
            
    const pageForward = () => {
        // Ensure we don't run off the end of the array
        if (currentPage >= matchingLength - propertiesPerPage) return;
        setCurrentPage((prevPage) => {
            const newPage = prevPage + propertiesPerPage;
            return newPage;
        });
        if (currentPage < matchingLength - propertiesPerPage) anchorEl.current.scrollIntoView({behavior: 'smooth'})
    };
    const pageBack = () => {
        setCurrentPage((prevPage) => {
            // Reset back to 0 before going negative
            const newPage = prevPage - propertiesPerPage >= 0 ? prevPage - propertiesPerPage : 0;
            return newPage;
        });
        // this scroll feature could actually be annoying. Need user feedback
       if (currentPage) anchorEl.current.scrollIntoView({ behavior: 'smooth' });
    };
    const previousDisabled = currentPage ? "" : "gray";
    const buttonsHidden = matchingLength ? "" : "hidden";
    const moreDisabled = currentPage + propertiesPerPage >= matchingLength ? "gray" : "";
    const extraPropertyText = matchingLength ? "similar" : "";
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
                <div className={`page-btns-wrapper ${buttonsHidden}`}>
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
                <h3 className="match-header">What about these {extraPropertyText} Properties?</h3>
                {similarProperties}
            </div>
        </div>
    )
}

export default PropertyIndex;