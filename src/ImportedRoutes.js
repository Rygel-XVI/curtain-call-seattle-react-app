import React from 'react';
import { Router, Route } from 'react-router';
import TheaterList from './containers/TheaterList'
import DateSearch from './containers/DateSearch'
import App from './App'

const ImportedRoutes = () => (
    <Router>
      <Route exact path="/home" component={App}/>
      <Route exact path="/theater" component={TheaterList}/>
      <Route exact path="/date" component={DateSearch}/>
    </Router>
);

export default ImportedRoutes;
