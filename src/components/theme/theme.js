import React from 'react';

import { Title, FlexColDiv } from '../../style/style';
import PlayBtn from '../button/playBtn';

import OceanSound from '../../sounds/aquatic.mp3';
import mountainSound from '../../sounds/concentration.mp3';
import rainSound from '../../sounds/rain.mp3';

import MeditatorIcon from '../../images/meditator.svg';
import Wave from '../../images/wave-2.png';
import Moon from '../../images/moon.png';
import Mountain from '../../images/mountain-2.png';
import Rain from '../../images/rain.png';

import {
  Container,
  PlayerContainer,
  FigureIcon,
  Icon,
  SVGIcon,
  Timer,
} from './themeStyles';

const svgConfig = {
  width: 453,
  height: 453,
  viewBox: '0 0 453 453',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
};

const circleConfig = {
  cx: 226.5,
  cy: 226.5,
  r: 216.5,
};

function Theme({ theme }) {
  return (
    <Container>
      <Title size="md">No one save us but ourselves</Title>

      <PlayerContainer>
        <audio class="music">
          <source src={OceanSound} />
        </audio>

        <FigureIcon src={MeditatorIcon} alt="meditator" />

        <SVGIcon
          // class="track-outline"
          {...svgConfig}>
          <circle {...circleConfig} stroke="white" stroke-width="20" />
        </SVGIcon>
        <SVGIcon
          // class="moving-outline"
          {...svgConfig}>
          <circle {...circleConfig} stroke="#018EBA" stroke-width="20" />
        </SVGIcon>
      </PlayerContainer>

      <FlexColDiv>
        <Timer size="sm">0:00</Timer>
        <PlayBtn />
      </FlexColDiv>

      {/* <Icon src={Wave} wave />
      <Icon src={Moon} moon /> */}

      {/* <Icon src={Mountain} bigMountain />
      <Icon src={Mountain} smallMountain /> */}

      <Icon src={Rain} leftRain />
      <Icon src={Rain} rightRain />
    </Container>
  );
}

export default Theme;
