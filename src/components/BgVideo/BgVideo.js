import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Gradient = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  background: linear-gradient(
    rgba(238, 238, 238, 0.3),
    rgba(238, 238, 238, 0.3)
  );
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  }
`;

function BgVideo({ bg }) {
  return (
    <div>
      <Gradient />
      <Video autoPlay muted loop id="video">
        <source src={bg} type="video/mp4" />
      </Video>
    </div>
  );
}

BgVideo.propType = {
  bg: PropTypes.string,
};

export default BgVideo;
