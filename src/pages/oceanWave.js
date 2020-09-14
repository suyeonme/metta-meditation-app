import React from 'react';
import styled from 'styled-components';

import { Title, FlexColDiv } from '../style/style';
import PlayBtn from '../components/button/playBtn';

import Sound from '../sounds/aquatic.mp3';
import MeditatorIcon from '../images/meditator.svg';

import Wave from '../images/wave-2.png';
import Moon from '../images/moon.png';
import Mountain from '../images/mountain-2.png';
import Rain from '../images/rain.png';

// setTimeOut: chaing title

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 92vh;
  overflow: hidden;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PlayerContainer = styled.div`
  position: relative;
  width: 15rem;
  height: 15rem;
  margin: 0 auto;
  ${'' /* display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1; */}
`;

export const SVGIcon = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 13rem;
  pointer-events: none;
`;

export const FigureIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
`;

export const Timer = styled(Title)`
  margin: 0;
  text-align: center;
`;

export const Icon = styled.img`
  position: absolute;
  height: auto;
  z-index: -1;

  ${({ wave }) =>
    wave &&
    `
  width: 50%;
  left: 50%;
  bottom: 3rem;
  transform: translateX(-50%);
  `};

  ${({ moon }) =>
    moon &&
    `
  width: 15%;
  top: 2rem;
  right: 10rem;
  `};

  ${({ bigMountain }) =>
    bigMountain &&
    `
  width: 35%;
  left: 13rem;
  bottom: -13rem;
  `};

  ${({ smallMountain }) =>
    smallMountain &&
    `
  width: 30%;
  right: 20rem;
  bottom: -19rem;
  `};

  ${({ leftRain }) =>
    leftRain &&
    `
  width: 17%;
  left: 13rem;
  top: 13rem;
  `};

  ${({ rightRain }) =>
    rightRain &&
    `
  width: 17%;
  right: 17rem;
  top: 20rem;
  `};
`;

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

function OceanWave() {
  return (
    <Container>
      <Title size="md">No one save us but ourselves</Title>

      <PlayerContainer>
        <audio class="music">
          <source src={Sound} />
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

export default OceanWave;
