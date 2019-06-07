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
      <Switch>
      <Route exact path="/home" component={App}/>
      <Route exact path="/theater"
            render={() => <TheaterList theaters={this.state.theaters} />} />
      <Route exact path="/date" component={DateSearch} theaters={this.state.theaters}/>
      </Switch>
      </React.Fragment>
      </Router>
      </div>
    );
  }
}


export default App;
