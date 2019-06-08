import React, { Component } from 'react';
import ShowsList from './ShowsList'

class DisplayShows extends Component {

  renderShows() {
    return this.props.theaters.map(t => {
      return <ShowsList />
    })
  }

  render() {
    return (
      <div>
      {this.renderShows()}
      </div>
    )
  }
}

export default DisplayShows;
