import React from "react";
import './SearchResults.css';
import TrackList from "../TrackList/TrackList";

function SearchResults ({userSearchResults}) {
    return (
        <div className="SearchResults">
        <TrackList userSearchResults = {userSearchResults} />
      </div>
        );
}

export default SearchResults;