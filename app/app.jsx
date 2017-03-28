var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, browserHistory } = require('react-router');
var Main = require('Main');

// app css
require('style!css!sass!applicationStyles');
// require('style!css!bootstrapStyles');


ReactDOM.render(
   <Router history={browserHistory}>
        <Route path='/' component={Main}>
        </Route>  
   </Router>,
    document.getElementById("app")
    );
    