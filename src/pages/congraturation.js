import React from 'react';
import styled from 'styled-components';

import Figure from '../images/figure-3.svg';
import { Title } from '../style/style';

const Container = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FigureIcon = styled.img`
  width: 30rem;
  height: auto;
  transform: translateY(7rem);
`;

const Span = styled.span`
  display: block;
  margin-top: 5rem;
  width: 80%;
`;

function Congraturation() {
  return (
    <Container>
      <FigureIcon src={Figure} />
      <Title size="xl">
        Congraturation!
        <Span>I wish you have a good day.</Span>
      </Title>
    </Container>
  );
}

export default Congraturation;
