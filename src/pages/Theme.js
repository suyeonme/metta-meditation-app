import React from 'react';

import Theme from '../containers/Theme/Theme';
import Ocean from '../assets/video/ocean.mp4';
import Mountain from '../assets/video/mountain.mp4';
import Rain from '../assets/video/rain.mp4';

export function OceanWave() {
  return <Theme url="/assets/ocean.mp3" theme="ocean" bg={Ocean} />;
}

export function MountainView() {
  return <Theme url="/assets/mountain.mp3" theme="mountain" bg={Mountain} />;
}

export function RainyBeach() {
  return <Theme url="/assets/rain.mp3" theme="rain" bg={Rain} />;
}
