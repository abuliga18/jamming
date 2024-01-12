import React from "react";
import styles from './TrackList.module.css'
import Track from "../Track/Track";

function TrackList({ userSearchResults, onAdd, isRemoval, onRemove }) {
  // Check if userSearchResults is undefined or not an array
  if (!userSearchResults || !Array.isArray(userSearchResults)) {
    // Return a message or handle the case where userSearchResults is not valid
    return <p>No search results available.</p>;
  }

  return (
    <div className={styles.TrackList}>
      {/* Use map() to render each Track component */}
      {userSearchResults.map((track) => (
        <Track key={track.id} track={track} onAdd={onAdd} isRemoval={isRemoval} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default TrackList;