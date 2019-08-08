import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClick = (event) => {
    console.log(event.target.value);
    // this.setState({ clicked: !this.state.clicked });
  }

  toogleClasses() {

    let classes = 'gif';
    if (this.state.clicked) {
      classes += ' selected';
    }
    return classes;
  }

  render() {
    const src = `https://i.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} className='gif' onClick={this.toogleClasses} />
    );
  }
}

export default Gif;

// {this.classNames()} onClick={this.handleclick()}
