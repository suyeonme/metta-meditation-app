import React from 'react';
import styled from 'styled-components';

import { Title, NavLink } from '../style/style';
import Card from '../components/card/card';
import { CardsContainer } from '../components/card/card';

import WaveIcon from '../assets/wave-1.png';
import mountainIcon from '../assets/mountain.png';
import rainIcon from '../assets/rain.png';

const Container = styled.div`
  text-align: center;
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
