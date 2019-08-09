import React, { Component } from 'react';

class Gif extends Component {
  constructor (props) {
    super(props);
  }

  handleClick = (e) => {
    this.props.findGif(e.target.id);
  }

  render () {
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img id={this.props.id} src={src} onClick={this.handleClick} />
    );
  }
}

export default Gif;
