import React from "react";
import './TrackList.css';
import Track from "../Track/Track";

function TrackList({ userSearchResults }) {
  // Check if userSearchResults is undefined or not an array
  if (!userSearchResults || !Array.isArray(userSearchResults)) {
    // Return a message or handle the case where userSearchResults is not valid
    return <p>No search results available.</p>;
  }

  return (
    <div className="TrackList">
      {/* Use map() to render each Track component */}
      {userSearchResults.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
}

export default TrackList;