import React from "react";
import styles from './SearchResults.module.css';
import TrackList from "../TrackList/TrackList";

function SearchResults ({userSearchResults, onAdd}) {
    return (
        <div className={styles.SearchResults}>
        <TrackList userSearchResults = {userSearchResults} onAdd={onAdd} isRemoval={false}/>
      </div>
        );
}

export default SearchResults;