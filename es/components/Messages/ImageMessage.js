import React, { Component } from 'react';

var ImageMessage = function ImageMessage(props) {
    return React.createElement(
        'a',
        { className: 'sc-message--image', href: props.url, target: '_blank', rel: 'noopener noreferrer' },
        React.createElement('img', { src: props.url, alt: 'image' })
    );
};

export default ImageMessage;