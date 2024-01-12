import React from "react";
import styles from './Track.module.css'

function Track ({isRemoval, track, onAdd, onRemove}) {

    const passTrack = () => {
      onAdd(track);
    }

    const passTrackToRemove = () => {
      onRemove(track);
    }

    const renderAction = () => {
     return ( 
        isRemoval? <button className="Track-action" onClick={ passTrackToRemove }>-</button> : <button className="Track-action" onClick={passTrack}>+</button>
     )
    }

    return (
      <div className={styles.Track}>
        <div className={styles["Track-information"]}>
          <h3>{track.name}</h3>
          <p>{track.artist} | {track.album}</p>
        </div>
        {renderAction()}
      </div>
    );
}

export default Track;