import React, { useState, useEffect } from 'react';

import { Container } from './themeStyles';
import { Title } from '../../style/style';
import ProgressBar from '../progressBar/progressBar';
import TimerBtn from '../button/TimerBtn';
import PlayBtn from '../button/playBtn';

function Theme(props) {
  const { url } = props;
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(600);
  const [currentTime, setCurrentTime] = useState(0);

  // Play audio
  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  //Update duration
  useEffect(() => {
    if (currentTime >= duration) return;
    if (playing) {
      const token = setTimeout(updateTime, 1000);

      return function cleanUp() {
        clearTimeout(token);
      };
    }
  });

  const handleClick = time => setDuration(time);
  const handleToggle = () => setPlaying(!playing);
  const updateTime = () => {
    if (playing) setDuration(duration - 1);
  };

  audio.ontimeupdate = () => {
    setCurrentTime(audio.currentTime);

    if (currentTime >= duration) {
      audio.pause();
      audio.currentTime = 0;
      setPlaying(false);
    }
  };

  return (
    <Container>
      <Title size="md">No one save us but ourselves</Title>
      <ProgressBar
        playing={playing}
        duration={duration}
        currentTime={Math.floor(currentTime)}
      />
      <PlayBtn playing={playing} onClick={handleToggle} />
      <TimerBtn onClick={handleClick} />
      {props.children}
    </Container>
  );
}

export default React.memo(Theme);
