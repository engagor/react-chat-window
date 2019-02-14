function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

var ActionMessage = function (_Component) {
  _inherits(ActionMessage, _Component);

  function ActionMessage() {
    _classCallCheck(this, ActionMessage);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ActionMessage.prototype.render = function render() {
    return React.createElement(
      "div",
      { className: "sc-message--text sc-message--action" },
      React.createElement("span", { className: "en-icon en-icon-cog" }),
      " ",
      this.props.data.text
    );
  };

  return ActionMessage;
}(Component);

export default ActionMessage;