import React, { useState } from 'react';
import './Radio.css'
import AudioPlayer from 'react-audio-player';
import { Playlist } from './Misc/Playlist';

const RadioScreen = () => {
  const [currentPlaylist, setCurrentPlaylist] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume] = useState(0.5);
  const [currentPlaylistMessage, setCurrentPlaylistMessage] = useState(Playlist[0].message);


  const handleNextTrack = () => {
    setCurrentTrack((currentTrack + 1) % Playlist[currentPlaylist].tracks.length);
    setIsPlaying(true);
  };

  const handlePreviousTrack = () => {
    setCurrentTrack((currentTrack - 1 + Playlist[currentPlaylist].tracks.length) % Playlist[currentPlaylist].tracks.length);
    setIsPlaying(true);
  };

  const handlePlaylistChange = (index) => {
    setCurrentPlaylist(index);
    setCurrentTrack(0);
    setCurrentPlaylistMessage(Playlist[index].message);
  };

  return (
    <div className="radio-container">
      <div className="left-side">
        <h2>Playlists</h2>
        <ul>
          {Playlist.map((playlist, index) => (
            <li key={index}>
              <button onClick={() => handlePlaylistChange(index)}>{playlist.name}</button>
            </li>
          ))}
        </ul>
      </div>


      <div className="right-side">
        <div className="top-section">
        <p>{currentPlaylistMessage}</p>
        <p>{Playlist[currentPlaylist].tracks[currentTrack].title}</p>
        </div>
        <AudioPlayer
          src={Playlist[currentPlaylist].tracks[currentTrack].src}
          controls
          onEnded={() => {
            handleNextTrack();
            setIsPlaying(true);
          }}
          playing={isPlaying}
          autoPlay={isPlaying}
          volume={volume}
          className="custom-audio-player"
        />
        <div className='buttons'>
        <button className="previous-button" onClick={handlePreviousTrack}>
        </button>
        <button className="next-button" onClick={handleNextTrack}></button>
        </div>
      </div>
    </div>
  );
};

export default RadioScreen;