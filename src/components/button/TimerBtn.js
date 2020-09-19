import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import useClickOutside from '../../hooks/useClickOutside';

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
  z-index: 3;

  @media (max-width: 320px) {
    top: 0;
  }
`;

const Span = styled.span`
  display: inline-block;
  transform: rotate(270deg);
  letter-spacing: 4px;
  font-size: 1.2rem;
`;

const SubBtn = styled.button`
  display: block;
  background: transparent;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
  margin: 5px;
`;

function TimerBtn({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const times = [
    { duration: 240, text: '4 min' },
    { duration: 360, text: '6 min' },
    { duration: 480, text: '8 min' },
  ];

  const handleClick = e => {
    if (e.target.id !== 'timeBtn') setIsOpen(!isOpen);
  };

  useClickOutside(ref, () => {
    setIsOpen(false);
  });

  const buttons = times.map((t, i) => (
    <SubBtn id="timeBtn" onClick={() => onClick(t.duration)} key={i}>
      {t.text}
    </SubBtn>
  ));

  return (
    <BtnContainer onClick={handleClick} isOpen={isOpen} ref={ref}>
      <Span>TIMER</Span>
      {isOpen && <div>{buttons}</div>}
    </BtnContainer>
  );
}

TimerBtn.propTypes = {
  onClick: PropTypes.func,
};

export default TimerBtn;
