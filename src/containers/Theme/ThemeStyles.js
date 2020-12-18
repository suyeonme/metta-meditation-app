import styled, { css } from 'styled-components';

import { pulse } from 'style/animation';
import { SmallTitle } from 'style/style';

export const Container = styled.div`
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
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => props.bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
  z-index: 3;
`;

export const FigureIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 55%;
  z-index: 3;

  animation: ${props =>
    props.playing &&
    css`
      ${pulse} 4s ease-in infinite;
    `};
`;

export const Timer = styled(SmallTitle)`
  position: absolute;
  bottom: 17%;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  color: white;
`;
