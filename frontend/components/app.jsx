import React from 'react';
import Header from './header';
import SearchBar from './search_bar';
import PropertyIndex from './property_index';

function App () {
    return (
        <div className="app-main">
            <Header />
            <SearchBar />
            <PropertyIndex />
        </div>
    )
}

export default App;