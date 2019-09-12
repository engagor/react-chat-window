import React, { Component } from 'react';
import Linkify from 'react-linkify';
import ImageMessage from "./ImageMessage";


const TextMessage = (props) => {
  let images;
  if (props.data.images && props.data.images.length > 0) {
    images = props.data.images.map((imageUrl) => {
      return <ImageMessage url={imageUrl} />
    });
  }

  return (
      <div className="sc-message--text">
        <Linkify properties={{ target: '_blank' }}>{props.data.text}</Linkify>
        {images}
      </div>
  )
}

export default TextMessage
