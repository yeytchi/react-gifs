import React, { Component } from 'react';
import Gif from './gif.jsx';

class GifList extends Component {
  render () {
    return (
      <div className='gif-list'>
        {this.props.gifs.map(gif => {
          return <Gif id={gif.id} key={gif.id} cliked='false' />
        })}
      </div>
    )
  }
}

export default GifList;
