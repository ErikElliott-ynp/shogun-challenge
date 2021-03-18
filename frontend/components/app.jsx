import React, { useState } from 'react';
import Header from './header';
import SearchBar from './search_bar';
import PropertyIndex from './property_index';
import Footer from "./footer";

function App () {
    const [properties, setProperties] = useState({
        matching: [],
        similar: [],
        hasSearched: false
    });
    return (
        <div className="app-main">
            <Header />
            <SearchBar setProperties={setProperties} />
            <PropertyIndex properties={properties} />
            <Footer />
        </div>
    )
}

export default App;