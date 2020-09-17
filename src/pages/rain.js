import React from 'react';

import { LeftRainIcon, RightRainIcon } from '../containers/Theme/ThemeStyles';
import Theme from '../containers/Theme/Theme';
import RainIcon from '../assets/rain.png';

function Rain() {
  return (
    <Theme url="/assets/rain.mp3">
      <LeftRainIcon src={RainIcon} />
      <RightRainIcon src={RainIcon} />
    </Theme>
  );
}

export default Rain;
