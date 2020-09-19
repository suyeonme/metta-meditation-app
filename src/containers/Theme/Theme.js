import React, { useState, useEffect, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import BgVideo from '../../components/BgVideo/BgVideo';
import { Container } from './ThemeStyles';
import DynamicText from '../../components/DynamicText/DynamicText';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import TimerBtn from '../../components/Button/TimerBtn';
import PlayBtn from '../../components/Button/PlayBtn';

function Theme(props) {
  const { url, theme, bg } = props;
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(360);
  const [currentTime, setCurrentTime] = useState(0);

  const handleClick = useCallback(time => setDuration(time), []);
  const handleToggle = useCallback(() => setPlaying(!playing), [playing]);

  const updateTime = () => {
    if (playing) setDuration(duration - 1);
  };

  const updateCurrentTime = useCallback(
    () => setCurrentTime(audio.currentTime),
    [audio.currentTime]
  );

  // Audio
  useEffect(() => {
    audio.addEventListener('timeupdate', updateCurrentTime);

    return () => audio.removeEventListener('timeupdate', updateCurrentTime);
  }, [audio, updateCurrentTime]);

  useEffect(() => {
    playing ? audio.play() : audio.pause();

    return () => {
      audio.pause();
    };
  }, [playing, audio]);

  // Timer
  useEffect(() => {
    if (playing) {
      const token = setTimeout(updateTime, 1000);

      return function cleanUp() {
        clearTimeout(token);
      };
    }
  });

  if (currentTime >= duration) {
    return <Redirect to="/congraturation" />;
  }

  return (
    <Container>
      <BgVideo bg={bg} />
      <DynamicText playing={playing} />
      <ProgressBar
        playing={playing}
        duration={duration}
        currentTime={Math.floor(currentTime)}
        theme={theme}
      />
      <PlayBtn playing={playing} onClick={handleToggle} />
      <TimerBtn onClick={handleClick} />
      {props.children}
    </Container>
  );
}

Theme.propTypes = {
  url: PropTypes.string,
  theme: PropTypes.string,
  bg: PropTypes.string,
};

export default React.memo(Theme);
