import React from 'react';

import { Icon } from '../components/theme/themeStyles';
import Theme from '../components/theme/theme';

import Wave from '../assets/wave-2.png';
import Moon from '../assets/moon.png';

function OceanWave(props) {
  return (
    <Theme url="/assets/ocean.mp3">
      <Icon src={Wave} wave />
      <Icon src={Moon} moon />
    </Theme>
  );
}

export default OceanWave;
