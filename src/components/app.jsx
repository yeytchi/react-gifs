import React, { Component } from 'react';
import SearchBar from './search_bar';
import GifList from './gif_list';
import Gif from './gif';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: 'eSpjNlNWb5gIg'
    };
  }

  search = (query) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=vF2APUCHQ2Gd5jIqHH51tKzUqNApseUT`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({ gifs: data.data });
      });
  }

  select = (id) => {
    this.setState({ selectedGifId: id });
  }

  render () {
    return (
      <div>
        <div className="left-side">
          <SearchBar search={this.search} />
          <div className="display-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-side">
          <GifList gifs={this.state.gifs} selectGif={this.select} />
        </div>
      </div>
    );
  }
}

export default App;
