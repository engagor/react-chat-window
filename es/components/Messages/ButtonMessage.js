function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

var ButtonMessage = function (_Component) {
  _inherits(ButtonMessage, _Component);

  function ButtonMessage() {
    _classCallCheck(this, ButtonMessage);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ButtonMessage.prototype.handleClick = function handleClick(button, event) {
    this.props.onButtonClick(button);
  };

  ButtonMessage.prototype.render = function render() {
    var buttons = this.props.data.buttons.map(function (button, index) {
      return React.createElement(
        'div',
        { className: 'sc-button' },
        React.createElement(
          'button',
          { key: 'button' + index, onClick: this.handleClick.bind(this, button) },
          button.text
        )
      );
    }.bind(this));

    return React.createElement(
      'div',
      { className: 'sc-message--text' },
      this.props.data.text,
      React.createElement(
        'div',
        { className: 'sc-buttons' },
        buttons
      )
    );
  };

  return ButtonMessage;
}(Component);

export default ButtonMessage;