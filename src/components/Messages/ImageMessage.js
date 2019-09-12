import React, { Component } from 'react';

const ImageMessage = (props) => {
    return (
        <a className="sc-message--image" href={props.url} target={'_blank'} rel={'noopener noreferrer'}>
            <img src={props.url} alt='image' />
        </a>
    )
}

export default ImageMessage;
