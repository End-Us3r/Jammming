import React from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track';

function Tracklist (props) {
    return (
        <div className={styles.Tracklist}>
            {/* You will add a map method that renders a set of Track compontents */}
            {props.userSearchResults.map((track) => (
                (
                    <Track />
                )
            ))}
        </div>
    );
}

export default Tracklist;