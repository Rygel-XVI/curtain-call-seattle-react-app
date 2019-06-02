import React from 'react';
import './App.css';
import Nav from './containers/Nav'
// import ImportedRoutes from './ImportedRoutes.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TheaterList from './containers/TheaterList'
import DateSearch from './containers/DateSearch'

function App() {
  return (
    <div className="App">
    <Router>
    <React.Fragment>
    <Switch>
    <Route exact path="/home" component={App}/>
    <Route exact path="/theater" component={TheaterList}/>
    <Route exact path="/date" component={DateSearch}/>
    <p>App Component!</p>
    <Nav />
    </Switch>
    </React.Fragment>
    </Router>

    </div>
  );
}

export default App;
