import React from "react";
import styles from './Playlist.module.css';
import TrackList from "../TrackList/TrackList";



function Playlist({playlistTracks, onRemove, onNameChange, onSave}) {

  const handleNameChange = (e) => {
    onNameChange(e.target.value) ;
  }

  return (
    <div className={styles.Playlist}>
      <input defaultValue={"New Playlist"} onChange={handleNameChange}/>
      <TrackList userSearchResults={playlistTracks} onRemove={onRemove} isRemoval={true}/>
      <button className={styles["Playlist-save"]} onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;