import React from 'react';

import {
  BigMountainIcon,
  SmallMountainIcon,
} from '../containers/Theme/ThemeStyles';
import Theme from '../containers/Theme/Theme';
import MountainIcon from '../assets/mountain-2.png';

function Mountain() {
  return (
    <Theme url="/assets/mountain.mp3">
      <BigMountainIcon src={MountainIcon} />
      <SmallMountainIcon src={MountainIcon} />
    </Theme>
  );
}

export default Mountain;
