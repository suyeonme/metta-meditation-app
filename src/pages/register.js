import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { MediumTitle } from '../style/style';
import Button from '../components/Button/Button';
import Icon from '../assets/figure-1.svg';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 92vh;
  width: 100vw;
  top: 0;
  left: 0;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 2.5rem;
  text-align: center;
  border-bottom: 3px solid black;
  margin-bottom: 5rem;

  @media (max-width: 900px) {
    margin-bottom: 0;
  }

  @media (max-width: 576px) {
    width: 80%;
    font-size: 1.6rem;
  }
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

  @media (max-width: 1200px) {
    width: 360px;
    height: 360px;
    left: 0;
    bottom: 0;
  }

  @media (max-width: 900px) {
    width: 340px;
    height: 340px;
    position: relative;
    bottom: 0;
    left: 0;
    transform: rotate(0);
  }

  @media (max-width: 576px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 320px) {
    width: 200px;
    height: 200px;
  }
`;

function Register(props) {
  const [name, setName] = useState('');

  const validateInput = name => {
    if (!name) alert('Can you enter your name, sir?');
    return false;
  };

  const handlechange = e => setName(e.target.value);

  const handleClick = n => {
    localStorage.setItem('name', n);

    const userName = localStorage.getItem('name');
    userName ? props.history.push('/') : validateInput();
  };

  return (
    <div>
      <Container>
        <QuestionContainer>
          <MediumTitle>What is your name?</MediumTitle>
          <Input onChange={handlechange} value={name} />
          <Button onClick={handleClick} name={name} />
        </QuestionContainer>
        <HeartIcon />
      </Container>
    </div>
  );
}

export default React.memo(Register);
