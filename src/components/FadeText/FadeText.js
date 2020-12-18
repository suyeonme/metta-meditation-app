import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropType from 'prop-types';

import { fade } from 'style/animation';
import { SmallTitle } from 'style/style';

const Text = styled(SmallTitle)`
  color: white;
  z-index: 3;
  opacity: 0;
  animation: ${props =>
    props.playing &&
    css`
      ${fade} 4s ease-in infinite
    `};
`;

function DynamicText({ playing }) {
  const [textIdx, setTextIdx] = useState(0);

  const textArr = ['Breath in', 'Breath out', 'Just focus on yourself'];
  let textThatChanges = textArr[textIdx % textArr.length];

  useEffect(() => {
    if (playing) {
      const interval = setInterval(() => {
        setTextIdx(index => index + 1);
      }, 4000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [playing]);

  return <Text playing={playing}>{textThatChanges}</Text>;
}

DynamicText.propType = {
  playing: PropType.bool,
};

export default DynamicText;
