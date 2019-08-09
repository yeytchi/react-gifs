import React, { Component } from 'react';
import Gif from './gif';


class GifList extends Component {
  constructor (props) {
    super(props);
  }

  selectGif = (id) => {
    this.props.select(id);
  }

  // this.props.selectGif(e) (function(event)) is given by component App

  render() {
    return this.props.gifs.map(gif => {
      return <Gif id={gif.id} key={gif.id} findGif={this.props.selectGif} />
    });
  }
};

export default GifList;
