import React, { useState} from 'react';
import styles from './App.module.css';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      name: 'Track Name 1',
      artist: 'Track Artist 1',
      album: 'Track Album 1',
      id: 1,
    },
    {
      name: 'Track Name 2',
      artist: 'Track Artist 2',
      album: 'Track Album 2',
      id: 2,
    },
    {
      name: 'Track Name 3',
      artist: 'Track Artist 3',
      album: 'Track Album 3',
      id: 3,
    },
    {
      name: 'Track Name 4',
      artist: 'Track Artist 4',
      album: 'Track Album 4',
      id: 4,
    },
    {
      name: 'Track Name 5',
      artist: 'Track Artist 5',
      album: 'Track Album 5',
      id: 5,
    },
  ]);
  const [playlistName, setPlaylistName] = useState('Example Playlist Name');
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: 'Playlist Track Name 1',
      artist: 'Playlist Track Artist 1',
      album: 'Playlist Track Album 1',
      id: 6,
    },
    {
      name: 'Playlist Track Name 2',
      artist: 'Playlist Track Artist 2',
      album: 'Playlist Track Album 2',
      id: 7,
    },
    {
      name: 'Playlist Track Name 3',
      artist: 'Playlist Track Artist 3',
      album: 'Playlist Track Album 3',
      id: 8,
    },
  ]);

  function addTrack(track) {
    const existingTrack = playlistTracks.find((t) => t.id === track.id);
    const newTrack = playlistTracks.concat(track);
    if (existingTrack) {
      console.log('Track already in playlist');
    } else {
      setPlaylistTracks(newTrack);
    }
  }

  function removeTrack(track) {
    const existingTrack = playlistTracks.filter((t) => t.id !== track.id);
    setPlaylistTracks(existingTrack);
  }

  function updatePlaylistName(name) {
    setPlaylistName(name);
  }
  
  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}  >mmm</span>ing
      </h1>
      <div className={styles.App}>
        <div className={styles['App-playlist']}>
          <SearchResults
            userSearchResults={searchResults}
            onAdd={addTrack}
          />
          <Playlist 
            playlistName={playlistName} 
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
