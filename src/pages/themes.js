import React from 'react';
import styled, { css } from 'styled-components';

import { Title, NavLink } from '../style/style';
import Card from '../components/Card/Card';
import { CardsContainer } from '../components/Card/Card';

import WaveIcon from '../assets/wave-1.png';
import mountainIcon from '../assets/mountain.png';
import rainIcon from '../assets/rain.png';

const Container = styled.div`
  text-align: center;
  ${'' /* top: 0;
  left: 0;
  right: 0;
  height: 100%; */}
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;

  @media (max-width: 768px) {
    top: 8vh;
    transform: translateY(0);
  }
`;

const sizes = {
  md: {
    fontSize: '3rem',
  },
  sm: {
    fontSize: '1.6rem',
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    font-weight: ${sizes[size].fontWeight};
    font-size: ${sizes[size].fontSize};
  `}
`;

const ThemeTitle = styled(Title)`
  font-size: 3rem;
  ${sizeStyles}
`;

function Themes() {
  const themeObj = [
    { img: WaveIcon, title: 'Ocean waves', link: '/ocean' },
    { img: mountainIcon, title: 'Mountain view', link: '/mountain' },
    { img: rainIcon, title: 'Standing in the rain', link: '/rain' },
  ];

  const name = localStorage.getItem('name');

  const themes = themeObj.map((theme, i) => (
    <NavLink to={theme.link} key={i}>
      <Card img={theme.img} title={theme.title} />
    </NavLink>
  ));

  return (
    <Container>
      <Title size="md">
        Welcome, <strong>{name}</strong>
      </Title>
      <Title size="sm">Choose your favorite theme</Title>
      <CardsContainer>{themes}</CardsContainer>
    </Container>
  );
}

export default React.memo(Themes);
