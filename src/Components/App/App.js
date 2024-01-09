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
    const [playlistName, setPlaylistName] = useState(initialPlaylistName);
    const [playlistTracks, setPlaylistTracks] = useState(initialPlaylistTracks);

    const addTrack = (track) => {
      const trackInPlaylist = playlistTracks.some((song) => song.id === track.id);

      if(!trackInPlaylist) {
        setPlaylistTracks((prevPlaylistTrack)=> [
          ...prevPlaylistTrack,
          track
        ]);
      }
    };

    const removeTrack = (track) => {
      const updatedPlaylist = playlistTracks.filter((song) => song.id !== track.id);
      setPlaylistTracks(updatedPlaylist);
    }
  
    return (
        <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          
          <div className="App-playlist">
            <SearchResults userSearchResults={searchResults} onAdd={addTrack} />
            <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack}/>
          </div>
        </div>
      </div>
        );
}

export default App;
