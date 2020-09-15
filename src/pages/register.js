import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { Title } from '../style/style';
import Button from '../components/button/button';
import Icon from '../images/figure-1.svg';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 92vh;
  width: 100vw;
  top: 0;
  left: 0;
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

function Register(props) {
  const [name, setName] = useState('');
  const userName = localStorage.getItem('name');

  const validateInput = name => {
    if (!name) alert('Can you enter your name, sir?');
    return false;
  };

  const handlechange = e => setName(e.target.value);

  const handleClick = n => {
    localStorage.setItem('name', n);
    const userName = localStorage.getItem('name');
    userName ? props.history.push('/themes') : validateInput();
  };

  if (userName) return <Redirect to="/themes" />;

  return (
    <div>
      <Container>
        <QuestionContainer>
          <Title size="lg">What is your name?</Title>
          <Input onChange={handlechange} value={name} />
          <Button onClick={handleClick} name={name} />
        </QuestionContainer>
        <HeartIcon />
      </Container>
    </div>
  );
}

export default Register;
