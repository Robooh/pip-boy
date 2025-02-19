import React, { useState, useRef, useEffect } from 'react';
import './Radio.css';
import './RadioMobile.css';
import AudioPlayer from 'react-audio-player';
import { Playlist } from './Misc/Playlist';

const RadioScreen = () => {
  const [currentPlaylist, setCurrentPlaylist] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentPlaylistMessage, setCurrentPlaylistMessage] = useState(Playlist[0].message);
  const [isStatic, setIsStatic] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current && audioRef.current.audioEl) {
      try {
        const audioElement = audioRef.current.audioEl;
        if (typeof audioElement.volume !== 'undefined') {
          audioElement.volume = volume;
        }
      } catch (error) {
        console.error('Error setting volume:', error);
      }
    }
  }, [volume]);

  const handleStationChange = (index) => {
    setIsStatic(true);
    setTimeout(() => {
      handlePlaylistChange(index);
      setIsStatic(false);
    }, 1000);
  };

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
              <button 
                className={currentPlaylist === index ? 'active-station' : ''}
                onClick={() => handleStationChange(index)}
              >
                {playlist.name} - {playlist.frequency}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="right-side">
        <div className="top-section">
          <div className={`radio-display ${isStatic ? 'static' : ''}`}>
            <p className="station-info">{currentPlaylistMessage}</p>
            <p className="track-info">{Playlist[currentPlaylist].tracks[currentTrack].title}</p>
            <p className="track-info">{Playlist[currentPlaylist].tracks[currentTrack].artist}</p>
            <div className="frequency-display">
              {Playlist[currentPlaylist].frequency}
            </div>
          </div>
        </div>
        <AudioPlayer
          ref={audioRef}
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
          <button className="previous-button" onClick={handlePreviousTrack}>←</button>
          <button className="next-button" onClick={handleNextTrack}>→</button>
        </div>
      </div>
    </div>
  );
};

export default RadioScreen;
