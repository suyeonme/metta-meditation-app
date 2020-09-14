import React from 'react';
import styled from 'styled-components';

import { BtnContainer } from './button';
import Play from '../../images/play.svg';
import Pause from '../../images/pause.svg';

const Container = styled(BtnContainer)`
  position: relative;
  margin: 2rem auto 0;
`;

const PlayIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 18px;
`;

function PlayBtn() {
  return (
    <Container>
      <PlayIcon src={Play} alt="play" />
    </Container>
  );
}

export default PlayBtn;
