import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
import App from './components/app';
// Import other JS files here

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
