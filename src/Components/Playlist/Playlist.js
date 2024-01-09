import React from "react";
import './Playlist.css'
import TrackList from "../TrackList/TrackList";



function Playlist({playlistTracks, onRemove}) {
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <TrackList playlistTracks={playlistTracks} onRemove={onRemove} isRemoval={true}/>
      <button className="Playlist-save">
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;