import React, { Component } from 'react';
import UpdateButtonContainer from './UpdateButtonContainer'
import DisplayShowsButton from './DisplayShowsButton'


class TheaterContainer extends Component {

  render() {
    return (
      <div className="theater">
      <h2>{this.props.theater.name}</h2>
      <UpdateButtonContainer theater={this.props.theater}/>
      <DisplayShowsButton shows={this.props.theater.shows} />
      </div>
    )
  }
}

export default TheaterContainer;
