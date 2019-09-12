import React, { Component } from 'react';

const ImageMessage = (props) => {
    return (
        <a className="sc-message--image" href={props.data.url} download={props.data.fileName} target={'_blank'} rel={'noopener noreferrer'}>
            <img src={props.data.url} alt={'props.data.fileName}'} />
        </a>
    )
}

export default ImageMessage;
