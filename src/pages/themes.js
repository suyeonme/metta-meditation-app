import React from 'react';
import styled from 'styled-components';

import { NavLink, MediumTitle, SmallTitle } from '../style/style';
import Card from '../components/Card/Card';
import { CardsContainer } from '../components/Card/Card';
import Ocean from '../assets/ocean.svg';
import Mountain from '../assets/mountain.svg';
import Rain from '../assets/rain.svg';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  text-align: center;

  @media (max-width: 768px) {
    top: 8vh;
    transform: translateY(0);
  }

  @media (max-width: 576px) {
    top: 10vh;
  }
`;

function Themes() {
  const themeObj = [
    { img: Ocean, title: 'Ocean waves', link: '/ocean' },
    { img: Mountain, title: 'Mountain view', link: '/mountain' },
    { img: Rain, title: 'Rainy beach', link: '/rainy' },
  ];

  const name = localStorage.getItem('name');

  const themes = themeObj.map((theme, i) => (
    <NavLink to={theme.link} key={i}>
      <Card img={theme.img} title={theme.title} />
    </NavLink>
  ));

  return (
    <Container>
      <MediumTitle>
        Welcome, <strong>{name}</strong>
      </MediumTitle>
      <SmallTitle>Choose your favorite theme</SmallTitle>
      <CardsContainer>{themes}</CardsContainer>
    </Container>
  );
}

export default React.memo(Themes);
