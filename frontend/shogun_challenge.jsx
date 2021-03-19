import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0,0);
    const rootEl = document.getElementById("root");
    ReactDOM.render(<Root />, rootEl)
});

