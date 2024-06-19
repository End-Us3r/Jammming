import React from 'react';
import './App.css';
import SearchBar from '../SearchBar;'
import SearchResultsComponent from '../SearchResults;'
import Playlist from '../Playlist;'

function App() {

  const SearchResultsData = [
    {id: '1', title:'name1', artist: 'artist1', album: 'album1', },
    {id: '2', title:'name2', artist: 'artist2', album: 'album2', },
    {id: '3', title:'name3', artist: 'artist3', album: 'album3', },
  ];

  const playlistTracks = [
    { id: '101', title: 'title1', artist: 'artist1', album: 'album1' },
    { id: '102', title: 'title2', artist: 'artist2', album: 'album2' },
  ];

  return (
    <div className='App'>
      <header className='App-header'>
        <a 
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
        </a>
      </header>
      <main>
        <SearchBar />
        <SearchResultsComponent searchResults={SearchResultsData} />
        <Playlist playlistTracks={playlistTracks} />
      </main>
    </div>
  );
}

export default App;