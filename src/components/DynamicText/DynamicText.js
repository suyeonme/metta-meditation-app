import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
const Text = styled.h3`
  text-align: center;
  font-size: 1.7rem;
  font-weight: 400;
  letter-spacing: 1px;

  ${'' /* opacity: 0;
  animation: ${fade} 3s ease-in infinite; */}
`;

function DynamicText({ playing }) {
  const [textIdx, setTextIdx] = useState(0);

  const textArr = ['Breath in', 'Breath out', 'Just focus on yourself'];
  let textThatChanges = textArr[textIdx % textArr.length];

  useEffect(() => {
    if (playing) {
      const interval = setInterval(() => {
        setTextIdx(index => index + 1);
      }, 3000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [playing]);

  return <Text>{textThatChanges}</Text>;
}

export default DynamicText;
