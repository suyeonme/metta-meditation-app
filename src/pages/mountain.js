import React from 'react';
import PropTypes from 'prop-types';

import {
  BigMountainIcon,
  SmallMountainIcon,
} from '../containers/Theme/ThemeStyles';
import Theme from '../containers/Theme/Theme';
import MountainIcon from '../assets/mountain-2.png';

function Mountain() {
  return (
    <Theme url="/assets/mountain.mp3" theme="mountain">
      <BigMountainIcon src={MountainIcon} />
      <SmallMountainIcon src={MountainIcon} />
    </Theme>
  );
}

Mountain.propTypes = {
  theme: PropTypes.string,
};

export default Mountain;
