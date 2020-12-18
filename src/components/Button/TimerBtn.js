import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Select = styled.select`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 1rem;
`;

function TimerBtn({ onClick, duration }) {
  const times = [
    { duration: 240, text: '4 min' },
    { duration: 360, text: '6 min' },
    { duration: 480, text: '8 min' },
  ];

  return (
    <Select onChange={e => onClick(+e.target.value)} value={duration}>
      {times.map((t, i) => (
        <option value={t.duration} key={i}>
          {t.text}
        </option>
      ))}
    </Select>
  );
}

TimerBtn.propTypes = {
  onClick: PropTypes.func,
  duration: PropTypes.number,
};

export default TimerBtn;
