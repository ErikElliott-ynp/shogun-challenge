import React from 'react';

function SearchBar (props) {
    return (
        <div className="search-bar-main">
            <div className="search-field" >
                <input type="text" placeholder="Search Me"/>
            </div>
            <button className="search-btn">Search</button>
        </div>
    )
}

export default SearchBar;