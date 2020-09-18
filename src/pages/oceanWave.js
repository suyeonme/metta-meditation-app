import React from 'react';
import PropTypes from 'prop-types';

import { WaveIcon, MoonIcon } from '../containers/Theme/ThemeStyles';
import Theme from '../containers/Theme/Theme';
import Wave from '../assets/wave-2.png';
import Moon from '../assets/moon.png';

function OceanWave() {
  return (
    <Theme url="/assets/ocean.mp3" theme="ocean">
      <WaveIcon src={Wave} />
      <MoonIcon src={Moon} />
    </Theme>
  );
}

OceanWave.propTypes = {
  theme: PropTypes.string,
};

export default OceanWave;
