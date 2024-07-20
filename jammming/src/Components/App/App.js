import React, { useState} from 'react';
import styles from './App.module.css';
import SearchResults from '../SearchResults/SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      name: 'track name 1',
      artist: 'track artist 1',
      album: 'track album 1',
      id: 1,
    },
    {
      name: 'track name 2',
      artist: 'track artist 2',
      album: 'track album 2',
      id: 2,
    },
    {
      name: 'track name 3',
      artist: 'track artist 3',
      album: 'track album 3',
      id: 3,
    },
    {
      name: 'Track Name 4',
      artist: 'track artist 4',
      album: 'track album 4',
      id: 4,
    },
    {
      name: 'track name 5',
      artist: 'track artist 5',
      album: 'track album 5',
      id: 5,
    },
  ]);

  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}  >mmm</span>ing
      </h1>
      <div className={styles.App}>
        {/* <-- Add a SearchBar component --> */}
        <div className={styles['App-playlist']}>
          {/* <-- Add a SearchResults component --> */}
          <SearchResults userSearchResults={searchResults} />
          {/* <-- Add a Playlist component --> */}
        </div>
      </div>
    </div>
  );
}

export default App;
