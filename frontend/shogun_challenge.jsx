import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0,0);
    const rootEl = document.getElementById("root");
    ReactDom.render(<Root />, rootEl)
})

