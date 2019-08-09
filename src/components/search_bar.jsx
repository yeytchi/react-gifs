import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = (e) => {
    this.props.search(e.target.value);
  }

  render () {
    return (
      <input className="search-bar" type="text" onChange={this.handleChange} />
    );
  }
}

export default SearchBar;
