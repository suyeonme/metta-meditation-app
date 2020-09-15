import React from 'react';

import { Icon } from '../components/theme/themeStyles';
import RainIcon from '../images/rain.png';
import Theme from '../components/theme/theme';

function Rain(props) {
  return (
    <Theme url="/assets/rain.mp3">
      <Icon src={RainIcon} leftRain />
      <Icon src={RainIcon} rightRain />
    </Theme>
  );
}

export default Rain;
