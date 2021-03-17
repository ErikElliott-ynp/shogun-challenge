import React, {useReducer, useState} from 'react';
import { fetchSearch } from '../util/api_util';
function SearchBar(props) {
    const [isFocused, setIsFocused] = useState(false);
    const [query, setQuery] =  useState("");
    const focusedCSS = isFocused ? "white-shadow" : "";
    function handleSubmit() {
        fetchSearch(query)
            .then( payload => {
                props.setMatchingProperties(payload.exactMatches);
            });
    }
    function handleEnter(e) {
        if (e.key === "Enter") {
            handleSubmit(query);
        }
    }
    return (
        <div className="search-bar-main">
            <div className="search-img"></div>
            <h2 className="search-header">Find the home you deserve</h2>
            <div 
                className={`search-info ${focusedCSS}`}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            >
                <div className="search-field" >
                    <input 
                        type="text" 
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyPress={handleEnter}
                        placeholder="Enter an Address in San Francisco"
                        value={query}
                    />
                </div>
                <i onClick={handleSubmit} className="fas fa-search"></i>
            </div>
        </div>
    )
}

export default SearchBar;