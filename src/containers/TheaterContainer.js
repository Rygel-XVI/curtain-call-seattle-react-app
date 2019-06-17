import React, { Component } from 'react';
import UpdateButtonContainer from './UpdateButtonContainer'
import DisplayShowsButton from './DisplayShowsButton'


class TheaterContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      location: '',
      last_updated: 'never',
      shows: []
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {

  }

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
