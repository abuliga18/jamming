import React, {useState} from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import './App.css'

function App () {

    const initialSearchResults = [
      { id: 1, name: "Track 1", artist: "Artist 1", album: "Album 1" },
      { id: 2, name: "Track 2", artist: "Artist 2", album: "Album 2" },
    ];

    const [searchResults, setSearchResults] = useState(initialSearchResults);
  
    return (
        <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          
          <div className="App-playlist">
            <SearchResults userSearchResults={searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
        );
}

export default App;
