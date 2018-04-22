var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var App = require('./components/App');

// React.createClass() - Depricated

ReactDOM.render(
  <App />,
  document.getElementById('app')
);