import React, { useRef, useEffect, useState } from 'react';

import MeditatorIcon from '../../assets/figure-2.svg';
import {
  PlayerContainer,
  FigureIcon,
  SVGIcon,
  Timer,
} from '../theme/themeStyles';

function ProgressBar({ duration, displayTime }) {
  const circleRef = useRef();
  const [length, setLength] = useState();

  useEffect(() => {
    const circleLength = circleRef.current.getTotalLength();
    setLength(circleLength);
    console.log(circleLength);
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
  };
  return (
    <PlayerContainer>
      <FigureIcon src={MeditatorIcon} alt="meditator" />

      <SVGIcon
        // class="track-outline"
        {...svgConfig}>
        <circle {...circleConfig} stroke="white" strokeWidth="20" />
      </SVGIcon>
      <SVGIcon
        // class="moving-outline"
        {...svgConfig}>
        <circle
          {...circleConfig}
          stroke="#018EBA"
          strokeWidth="20"
          ref={circleRef}
          //style={{ strokeDasharray: length, strokeDashoffset: length }}
        />
      </SVGIcon>

      <Timer size="sm">{displayTime}</Timer>
    </PlayerContainer>
  );
}

export default ProgressBar;
