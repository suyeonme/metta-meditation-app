import React, { useState } from 'react';
import styled from 'styled-components';

const BtnContainer = styled.div`
  position: absolute;
  top: 5rem;
  right: 0;
  border-radius: 7px 0 0 7px;
  color: white;
  background: black;
  width: ${props => (props.isOpen ? '10rem' : '3rem')};
  height: 8rem;
  display: flex;
  justify-content: ${props => (props.isOpen ? 'flex-start' : 'center')};
  align-items: center;
  cursor: pointer;
`;

const Span = styled.span`
  display: inline-block;
  transform: rotate(270deg);
  letter-spacing: 4px;
  font-size: 1.2rem;
`;

const SubBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubBtn = styled.button`
  background: transparent;
  margin: 5px;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
`;

function TimerBtn({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const times = [
    { duration: 300, text: '5 min' },
    { duration: 600, text: '10 min' },
    { duration: 900, text: '15 min' },
  ];
  const buttons = times.map((t, i) => (
    <SubBtn id="btn" onClick={() => onClick(t.duration)} key={i}>
      {t.text}
    </SubBtn>
  ));

  const handleClick = e => {
    if (e.target.id !== 'btn') setIsOpen(!isOpen);
  };

  return (
    <BtnContainer onClick={handleClick} isOpen={isOpen}>
      <Span>TIMER</Span>
      {isOpen && <SubBtnContainer>{buttons}</SubBtnContainer>}
    </BtnContainer>
  );
}

export default TimerBtn;
