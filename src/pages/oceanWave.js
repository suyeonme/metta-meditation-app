import React from 'react';

import { WaveIcon, MoonIcon } from '../containers/Theme/ThemeStyles';
import Theme from '../containers/Theme/Theme';
import Wave from '../assets/wave-2.png';
import Moon from '../assets/moon.png';

function OceanWave() {
  return (
    <Theme url="/assets/ocean.mp3">
      <WaveIcon src={Wave} />
      <MoonIcon src={Moon} />
    </Theme>
  );
}

export default OceanWave;
