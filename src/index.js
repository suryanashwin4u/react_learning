// we can write it like this
// var React = require('react');
// var ReactDom = require('react-dom');

// to use jsx we import react module
import React from 'react';
// to use render method of react-dome module 
import ReactDom from 'react-dom';
// to produce jsx output at particular html id
ReactDom.render(<h1>helloworld</h1>, document.getElementById('root'));