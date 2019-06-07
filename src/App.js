import React, { Component } from 'react';
import './App.css';
import Nav from './containers/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TheaterList from './containers/TheaterList'
import DateSearch from './containers/DateSearch'
import UpdateButtonContainer from './containers/UpdateButtonContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      theaters: []
    }
  }

  getTheaters() {
    fetch("http://localhost:3000/theater.json")
    .then(response => response.json())
    .then(data => {
      this.setState({
        theaters: data
      })
    })
  }

  componentDidMount() {
    this.getTheaters()
  }

  render() {
    return (
      <div className="App">
      <Router>
      <Nav />
      <p>App Component!</p>
      <React.Fragment>
      <UpdateButtonContainer theaters={this.state.theaters}/>

      <Switch>
      <Route exact path="/home" component={App}/>
      <Route exact path="/theater" component={TheaterList}/>
      <Route exact path="/date" component={DateSearch}/>
      </Switch>
      </React.Fragment>
      </Router>
      </div>
    );
  }
}

export default App;
