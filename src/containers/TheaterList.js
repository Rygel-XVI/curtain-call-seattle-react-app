import React, { Component } from 'react';
import UpdateButtonContainer from './UpdateButtonContainer'


class TheaterList extends Component {

  render() {
    return (
      <div>
      <UpdateButtonContainer theaters={this.props.theaters}/>
      </div>
    )
  }
}

export default TheaterList;
