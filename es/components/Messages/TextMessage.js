import React, { Component } from 'react';
import Linkify from 'react-linkify';
import ImageMessage from "./ImageMessage";

var TextMessage = function TextMessage(props) {
  var images = void 0;
  if (props.data.images && props.data.images.length > 0) {
    images = props.data.images.map(function (imageUrl) {
      return React.createElement(ImageMessage, { url: imageUrl });
    });
  }

  return React.createElement(
    'div',
    { className: 'sc-message--text' },
    React.createElement(
      Linkify,
      { properties: { target: '_blank' } },
      props.data.text
    ),
    images
  );
};

export default TextMessage;