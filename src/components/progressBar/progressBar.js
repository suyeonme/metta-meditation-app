import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  PlayerContainer,
  FigureIcon,
  SVGIcon,
  Timer,
} from '../../containers/Theme/ThemeStyles';
import MeditatorIcon from '../../assets/figure-2.svg';

function ProgressBar({ duration, currentTime, playing, theme }) {
  const [length, setLength] = useState();
  const circleRef = useRef();

  const progress = length - (currentTime / duration) * length;
  const elapsed = duration - currentTime;
  const sec = Math.floor(elapsed % 60);
  const min = Math.floor(elapsed / 60);

  useEffect(() => {
    const circleLength = circleRef.current.getTotalLength();
    setLength(circleLength);
  }, []);

  const svgConfig = {
    width: 453,
    height: 453,
    viewBox: '0 0 453 453',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  };

  const circleConfig = {
    cx: 226.5,
    cy: 226.5,
    r: 216.5,
    strokeWidth: 20,
  };

  const color = {
    ocean: { progress: '#F7D06F', stroke: '#F9B91B' },
    mountain: { progress: '#7A9583', stroke: '#196D36' },
    rain: { progress: '#A0BDE6', stroke: '#3680EA' },
  };

  let progressColor;
  let strokeColor;

  switch (theme) {
    case 'ocean':
      progressColor = color.ocean.progress;
      strokeColor = color.ocean.stroke;
      break;
    case 'mountain':
      progressColor = color.mountain.progress;
      strokeColor = color.mountain.stroke;
      break;
    case 'rain':
      progressColor = color.rain.progress;
      strokeColor = color.rain.stroke;
      break;
    default:
      break;
  }

  return (
    <PlayerContainer>
      <FigureIcon src={MeditatorIcon} alt="meditator" playing={playing} />

      <SVGIcon {...svgConfig}>
        <circle {...circleConfig} stroke={progressColor} />
      </SVGIcon>
      <SVGIcon {...svgConfig}>
        <circle
          {...circleConfig}
          ref={circleRef}
          stroke={strokeColor}
          transform="rotate(-90 226.5 226.5)"
          style={{
            strokeDasharray: length,
            strokeDashoffset: progress ? progress : length,
          }}
        />
      </SVGIcon>

      <Timer size="sm">{`${min}: ${sec}`}</Timer>
    </PlayerContainer>
  );
}

ProgressBar.propTypes = {
  duration: PropTypes.number,
  currentTime: PropTypes.number,
  playing: PropTypes.bool,
  theme: PropTypes.string,
};

export default React.memo(ProgressBar);
