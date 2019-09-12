'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLinkify = require('react-linkify');

var _reactLinkify2 = _interopRequireDefault(_reactLinkify);

var _ImageMessage = require('./ImageMessage');

var _ImageMessage2 = _interopRequireDefault(_ImageMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextMessage = function TextMessage(props) {
  var images = void 0;
  if (props.data.images && props.data.images.length > 0) {
    images = props.data.images.map(function (imageUrl) {
      return _react2.default.createElement(_ImageMessage2.default, { url: imageUrl });
    });
  }

  return _react2.default.createElement(
    'div',
    { className: 'sc-message--text' },
    _react2.default.createElement(
      _reactLinkify2.default,
      { properties: { target: '_blank' } },
      props.data.text
    ),
    images
  );
};

exports.default = TextMessage;
module.exports = exports['default'];