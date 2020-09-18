import React from 'react';
import PropTypes from 'prop-types';

import { LeftRainIcon, RightRainIcon } from '../containers/Theme/ThemeStyles';
import Theme from '../containers/Theme/Theme';
import RainIcon from '../assets/rain.png';

function Rain() {
  return (
    <Theme url="/assets/rain.mp3" theme="rain">
      <LeftRainIcon src={RainIcon} />
      <RightRainIcon src={RainIcon} />
    </Theme>
  );
}

Rain.propTypes = {
  theme: PropTypes.string,
};

export default Rain;
