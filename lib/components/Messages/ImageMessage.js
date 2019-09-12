'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageMessage = function ImageMessage(props) {
    return _react2.default.createElement(
        'a',
        { className: 'sc-message--image', href: props.url, target: '_blank', rel: 'noopener noreferrer' },
        _react2.default.createElement('img', { src: props.url, alt: 'image' })
    );
};

exports.default = ImageMessage;
module.exports = exports['default'];