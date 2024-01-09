import React from "react";
import './SearchResults.css';
import TrackList from "../TrackList/TrackList";

function SearchResults ({userSearchResults, onAdd}) {
    return (
        <div className="SearchResults">
        <TrackList userSearchResults = {userSearchResults} onAdd={onAdd} isRemoval={false}/>
      </div>
        );
}

export default SearchResults;