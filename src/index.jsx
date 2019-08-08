import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
import App from './components/app';
import SearchBar from './components/search.jsx';
import Gif from './components/gif.jsx'

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
