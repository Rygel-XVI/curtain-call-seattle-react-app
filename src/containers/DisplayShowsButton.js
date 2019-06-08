import React, { Component } from 'react';
import ShowsList from './ShowsList'

class DisplayShowsButton extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      shows: []
    })
  }

// on button click it should display a list of shows
// elevate the function up??
  onClick(e) {
  }

  renderShowButtons() {

  }

  render() {
    return (
      <div>
      <button onClick={this.onClick()}>Display Shows</button>

      </div>
    )
  }
}

export default DisplayShowsButton;
