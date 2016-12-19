'use strict';
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, hasHistory,browserHistory} from 'react-router';
import Apploader from './containers/apploader';
import webpackDemo from './components/webpackDemo/webpackDemo';

render(
    <Router history={browserHistory}>
    <Route path="/" component={Apploader}/>
    <Route path="/webpackDemo" component={webpackDemo}/> 
</Router>, document.getElementById('app'))
