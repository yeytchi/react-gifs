import React, { Component } from 'react';
import SearchBar from './search';
import GifList from './gif_list';
import Gif from './gif';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [{ id: '3xz2BAVnQrTtHDJ1LO' }, { id: 'T87LSjmwqumZO' }],
      selectedGifId: '3xz2BAVnQrTtHDJ1LO'
    }
  }

  search = (query) => {
  }

  render () {
    return (
      <div>
        <div className='gif-display'>
          <SearchBar />
          <div className='selected-gif'>
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
