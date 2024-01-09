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

    const initialPlaylistName = "My Playlist";
    const initialPlaylistTracks = [
      { id: 3, name: "Track 3", artist: "Artist 3", album: "Album 3" },
    ];

    const [searchResults, setSearchResults] = useState(initialSearchResults);
    const [playlistName, setPlaylistName] = useState();
    const [playlistTracks, setPlaylistTracks] = useState();
  
    return (
        <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          
          <div className="App-playlist">
            <SearchResults userSearchResults={searchResults} />
            <Playlist playlistName={playlistName} playlistTracks={playlistTracks} />
          </div>
        </div>
      </div>
        );
}

export default App;
