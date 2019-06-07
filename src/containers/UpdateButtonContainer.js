import React, { Component } from 'react';
import UpdateButton from '../components/UpdateButton'

class UpdateButtonContainer extends Component {

  renderButtons() {
    return this.props.theaters.map(t => {
      return  <UpdateButton theater={t}/>
    })
  }

  render() {
    return (
      <div>
        {this.renderButtons()}
      </div>
    )
  }
}

export default UpdateButtonContainer;
