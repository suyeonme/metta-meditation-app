import React from 'react';
import styled from 'styled-components';

import { Title } from '../style/style';
import Button from '../components/button/button';
import Icon from '../images/heart.svg';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 92vh;
  width: 100vw;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 2.5rem;
  text-align: center;
  border-bottom: 3px solid black;
  margin-bottom: 5rem;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeartIcon = styled.div`
  position: absolute;
  left: 5rem;
  bottom: 2rem;
  width: 380px;
  height: 380px;
  transform: rotate(-10deg);
  background: url(${Icon}) center center no-repeat;
  background-size: 100%;
`;

function Landing() {
  return (
    <div>
      <Container>
        <QuestionContainer>
          <Title size="lg">What is your name?</Title>
          <Input />
          <Button />
        </QuestionContainer>
        <HeartIcon />
      </Container>
    </div>
  );
}

export default Landing;
