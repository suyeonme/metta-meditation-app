import React from 'react';

import { Icon } from '../components/theme/themeStyles';
import MountainIcon from '../assets/mountain-2.png';
import Theme from '../components/theme/theme';

function Mountain(props) {
  return (
    <Theme url="/assets/mountain.mp3">
      <Icon src={MountainIcon} bigMountain />
      <Icon src={MountainIcon} smallMountain />
    </Theme>
  );
}

export default Mountain;
