import styled, { keyframes, css } from 'styled-components';
import { Title } from '../../style/style';

export const Container = styled.div`
  ${'' /* position: relative; */}
  width: 100vw;
  height: 92vh;
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: absolute;
  top: 8vh;
  right: 0;
  left: 0;
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

const pulse = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  70% {
    transform: translate(-50%, -50%) scale(1.1);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const FigureIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;

  animation: ${props =>
    props.playing &&
    css`
      ${pulse} 3s ease-in infinite;
    `};
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
`;

export const WaveIcon = styled(Icon)`
  width: 50%;
  left: 50%;
  bottom: 3rem;
  transform: translateX(-50%);

  @media (max-width: 900px) {
    width: 70%;
  }

  @media (max-width: 576px) {
    width: 80%;
  }

  @media (max-width: 320px) {
    width: 100%;
  }
`;

export const MoonIcon = styled(Icon)`
  width: 15%;
  top: 2rem;
  right: 10rem;

  @media (max-width: 900px) {
    width: 20%;
    right: 5rem;
  }
`;

export const BigMountainIcon = styled(Icon)`
  width: 35%;
  left: 7rem;
  bottom: -100px;

  @media (max-width: 1200px) {
    width: 40%;
  }

  @media (max-width: 900px) {
    width: 350px;
    left: 3rem;
  }

  @media (max-width: 576px) {
    width: 70%;
    left: 0;
    bottom: -50px;
  }
`;

export const SmallMountainIcon = styled(Icon)`
  width: 30%;
  right: 7rem;
  bottom: -150px;

  @media (max-width: 1200px) {
    width: 35%;
    right: 10rem;
  }

  @media (max-width: 900px) {
    width: 300px;
    right: 0;
  }

  @media (max-width: 576px) {
    width: 50%;
    right: 0;
    bottom: -50px;
  }
`;

export const LeftRainIcon = styled(Icon)`
  width: 17%;
  left: 13rem;
  top: 13rem;

  @media (max-width: 1200px) {
    left: 9rem;
  }

  @media (max-width: 900px) {
    left: 5rem;
  }

  @media (max-width: 576px) {
    width: 25%;
    top: 12rem;
    left: 2rem;
  }
`;

export const RightRainIcon = styled(Icon)`
  width: 17%;
  right: 17rem;
  top: 20rem;

  @media (max-width: 1200px) {
    right: 10rem;
  }

  @media (max-width: 900px) {
    right: 5rem;
  }

  @media (max-width: 576px) {
    width: 23%;
    top: 25rem;
    right: 2rem;
  }
`;
