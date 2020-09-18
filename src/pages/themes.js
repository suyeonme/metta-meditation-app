import React from 'react';
import styled from 'styled-components';

import { NavLink, MediumTitle, SmallTitle } from '../style/style';
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

  @media (max-width: 576px) {
    top: 10vh;
  }
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
      <MediumTitle>
        Welcome, <strong>{name}</strong>
      </MediumTitle>
      <SmallTitle>Choose your favorite theme</SmallTitle>
      <CardsContainer>{themes}</CardsContainer>
    </Container>
  );
}

export default React.memo(Themes);
