import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { BtnContainer } from 'components/Button/Button';
import Play from 'assets/play.svg';
import Pause from 'assets/pause.svg';

const Container = styled(BtnContainer)`
  position: relative;
  margin: 2rem auto 0;
  z-index: 3;
  background: white;
`;

const PlayIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 18px;
`;

function PlayBtn({ onClick, playing }) {
  return (
    <Container onClick={onClick}>
      <PlayIcon src={playing ? Pause : Play} alt="play" />
    </Container>
  );
}

PlayBtn.propTypes = {
  onClick: PropTypes.func,
  playing: PropTypes.bool,
};

export default PlayBtn;
