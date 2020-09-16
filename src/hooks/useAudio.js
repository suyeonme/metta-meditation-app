import React, { useState, useEffect } from 'react';
import PlayBtn from '../components/button/playBtn';

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

const Player = ({ url, setStart }) => {
  const [playing, toggle] = useAudio(url);

  const handleClick = () => {
    toggle();
    setStart();
  };

  return <PlayBtn onClick={handleClick} playing={playing} />;
};

export default Player;
