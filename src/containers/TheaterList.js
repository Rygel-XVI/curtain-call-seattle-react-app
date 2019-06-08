import React, { Component } from 'react';
import TheaterContainer from './TheaterContainer'


class TheaterList extends Component {

  renderTheaters() {
    return this.props.theaters.map(t => {
      return <TheaterContainer theater={t} />
    })
  }

  render() {
    return (
      <div>
      {this.renderTheaters()}
      </div>
    )
  }
}

export default TheaterList;
