import React, { Component } from 'react';

class ButtonMessage extends Component {

  handleClick(button, event) {
    this.props.onButtonClick(button);
  }

  render() {
    var buttons = this.props.data.buttons.map(function(button, index) {
      return (
        <div className="sc-button">
            <button key={'button' + index} onClick={this.handleClick.bind(this, button)}>{button.text}</button>
        </div>
      );
    }.bind(this));

    return (
      <div className="sc-message--text">
        {this.props.data.text}
        <div className="sc-buttons">
            {buttons}
        </div>
      </div>
    );
  }
}

export default ButtonMessage