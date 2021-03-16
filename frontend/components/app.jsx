import React, { useState } from 'react';
import Header from './header';
import SearchBar from './search_bar';
import PropertyIndex from './property_index';

function App () {
    const [matchingProperties, setMatchingProperties] = useState([]);

    return (
        <div className="app-main">
            <Header />
            <SearchBar setMatchingProperties={setMatchingProperties}/>
            <PropertyIndex matchingProperties={matchingProperties}/>
        </div>
    )
}

export default App;