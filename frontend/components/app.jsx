import React, { useState } from 'react';
import Header from './header';
import SearchBar from './search_bar';
import PropertyIndex from './property_index';

function App () {
    const [properties, setProperties] = useState({
        matching: [],
        similar: []
    });
    return (
        <div className="app-main">
            <Header />
            <SearchBar setProperties={setProperties} />
            <PropertyIndex properties={properties} />
        </div>
    )
}

export default App;