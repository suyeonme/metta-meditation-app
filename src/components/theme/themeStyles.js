import styled from 'styled-components';
import { Title } from '../../style/style';

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
  width: 19rem;
  height: 19rem;
  margin: 0 auto;
`;

export const SVGIcon = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 15rem;
  pointer-events: none;
`;

export const FigureIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65%;
`;

export const Timer = styled(Title)`
  position: absolute;
  bottom: 17%;
  left: 50%;
  transform: translateX(-50%);
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
