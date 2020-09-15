import React from 'react';
import styled from 'styled-components';

import Arrow from '../../images/arrow.svg';

export const BtnContainer = styled.button`
  position: relative;
  width: 80px;
  height: 80px;
  background: black;
  border-radius: 50%;
  cursor: pointer;
  margin-top: 3rem;
`;

const ArrowIcon = styled.img`
  width: 45%;
  height: 45%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Button({ onClick, name }) {
  return (
    <BtnContainer onClick={() => onClick(name)}>
      <ArrowIcon src={Arrow} alt="button" />
    </BtnContainer>
  );
}

export default Button;
