import React from 'react';
import styled from 'styled-components';

import { Title, NavLink } from '../style/style';
import Card from '../components/card/card';
import { CardsContainer } from '../components/card/card';
import Button from '../components/button/button';

import WaveIcon from '../images/wave-1.png';
import mountainIcon from '../images/mountain.png';
import rainIcon from '../images/rain.png';

const Container = styled.div`
  text-align: center;
`;

const themeObj = [
  { img: WaveIcon, title: 'Ocean waves', link: '/ocean' },
  { img: mountainIcon, title: 'Mountain view', link: '/mountain' },
  { img: rainIcon, title: 'Standing in the rain', link: '/rain' },
];

const themes = themeObj.map((theme, i) => (
  <NavLink to={theme.link}>
    <Card img={theme.img} title={theme.title} key={i} />
  </NavLink>
));

function Themes() {
  return (
    <Container>
      <Title size="md">
        Welcome, <strong>Suyeon</strong>
      </Title>
      <Title size="sm">Choose your favorite theme</Title>
      <CardsContainer>{themes}</CardsContainer>
      <Button />
    </Container>
  );
}

export default Themes;
