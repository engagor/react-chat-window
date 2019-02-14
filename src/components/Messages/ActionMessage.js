import React, { Component } from 'react';

class ActionMessage extends Component {

  render() {
    return (
      <div className="sc-message--text sc-message--action">
        <span className="en-icon en-icon-cog"></span> {this.props.data.text}
      </div>
    );
  }
}

export default ActionMessage