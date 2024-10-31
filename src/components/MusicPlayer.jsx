import React, { useState, useEffect, useRef } from 'react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.25);
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const audioRef = useRef(new Audio('/assets/background-music.mp3'));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = volume;
    
    audio.play().catch(e => console.log('Auto-play prevented:', e));

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className="music-player-container"
      style={{
        position: 'fixed',
        top: '80px',
        right: '20px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        padding: '10px'
      }}
      onMouseEnter={() => setIsSliderVisible(true)}
      onMouseLeave={() => setIsSliderVisible(false)}
    >
      <div 
        onClick={togglePlay}
        className={`music-player ${isPlaying ? 'playing' : ''}`}
        style={{
          cursor: 'pointer',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: 'rgba(102, 179, 255, 0.1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'all 0.3s ease',
          marginBottom: isSliderVisible ? '160px' : '0'
        }}
      >
        <style>
          {`
            .music-player {
              position: relative;
              overflow: hidden;
            }

            .music-player:hover {
              transform: scale(1.1);
              background-color: rgba(102, 179, 255, 0.2);
            }

            @keyframes soundWave {
              0% {
                box-shadow: 0 0 0 0 rgba(102, 179, 255, 0.4);
              }
              70% {
                box-shadow: 0 0 0 10px rgba(102, 179, 255, 0);
              }
              100% {
                box-shadow: 0 0 0 0 rgba(102, 179, 255, 0);
              }
            }

            .music-player.playing {
              animation: soundWave 2s infinite;
            }

            .music-note {
              color: #66b3ff;
              font-size: 20px;
              transition: transform 0.3s ease;
            }

            .music-player:hover .music-note {
              transform: scale(1.1);
            }

            .music-player.playing .music-note {
              animation: bounce 1s infinite;
            }

            @keyframes bounce {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-3px);
              }
            }

            .volume-slider {
              width: 100px;
              height: 4px;
              -webkit-appearance: none;
              background: rgba(102, 179, 255, 0.1);
              outline: none;
              border-radius: 2px;
              transition: all 0.3s ease;
              margin: 20px 0;
            }

            .volume-slider::-webkit-slider-thumb {
              -webkit-appearance: none;
              width: 12px;
              height: 12px;
              border-radius: 50%;
              background: #66b3ff;
              cursor: pointer;
              transition: all 0.3s ease;
            }

            .volume-slider::-webkit-slider-thumb:hover {
              transform: scale(1.2);
            }

            .volume-container {
              position: absolute;
              top: 90px;
              left: 50%;
              transform: translateX(-50%) rotate(-90deg);
              transition: all 0.3s ease;
              opacity: 0;
              pointer-events: none;
              padding: 20px;
            }

            .volume-container.visible {
              opacity: 1;
              pointer-events: auto;
            }
          `}
        </style>
        <div className="music-note">
          ♪
        </div>
      </div>
      <div className={`volume-container ${isSliderVisible ? 'visible' : ''}`}>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="volume-slider"
        />
      </div>
    </div>
  );
} 