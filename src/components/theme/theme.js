import React, { useState, useEffect } from 'react';

import { Container } from './themeStyles';
import { Title, FlexColDiv } from '../../style/style';
import ProgressBar from '../progressBar/progressBar';
import TimerBtn from '../button/TimerBtn';
import Player from '../../hooks/useAudio';

function Theme(props) {
  const { url } = props;

  const [start, setStart] = useState(false);
  const [duration, setDuration] = useState({ min: 600, sec: 0 });
  const { min, sec } = duration;

  const displayTime = `${Math.floor(min / 60)}:${Math.floor(sec % 60)}`;

  const handleClick = time => {
    setDuration({ min: time, sec: 0 });
  };

  const handleToggle = () => {
    setStart(!start);
  };

  const updateTime = () => {
    if (start) {
      if (sec === 0) {
        setDuration({
          min: min - 1,
          sec: 59,
        });
      } else {
        setDuration({ ...duration, sec: sec - 1 });
      }
    }
  };

  useEffect(() => {
    if (start) {
      const token = setTimeout(updateTime, 1000);

      return function cleanUp() {
        clearTimeout(token);
      };
    }
  });

  return (
    <Container>
      <Title size="md">No one save us but ourselves</Title>
      <ProgressBar duration={duration} displayTime={displayTime} />
      <FlexColDiv>
        <Player url={url} setStart={handleToggle} />
        <TimerBtn onClick={handleClick} />
      </FlexColDiv>
      {props.children}
    </Container>
  );
}

export default Theme;
