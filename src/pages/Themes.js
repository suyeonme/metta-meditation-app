import React from 'react';
import styled from 'styled-components';

import Theme from 'containers/Theme/Theme';
import Card from 'components/Card/Card';
import { CardsContainer } from 'components/Card/Card';
import { NavLink, MediumTitle, SmallTitle } from 'style/style';

import Ocean from 'assets/ocean.svg';
import Mountain from 'assets/mountain.svg';
import Rain from 'assets/rain.svg';
import OceanImg from 'assets/ocean.jpg';
import MountainImg from 'assets/mountain.jpg';
import RainImg from 'assets/rainy.jpg';

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

export const OceanWave = () => (
  <Theme url="/assets/ocean.mp3" theme="ocean" bgImg={OceanImg} />
);
export const MountainView = () => (
  <Theme url="/assets/mountain.mp3" theme="mountain" bgImg={MountainImg} />
);
export const RainyBeach = () => (
  <Theme url="/assets/rain.mp3" theme="rain" bgImg={RainImg} />
);

function Themes() {
  const name = localStorage.getItem('name');
  const themeObj = [
    { img: Ocean, title: 'Ocean waves', link: '/ocean' },
    { img: Mountain, title: 'Mountain view', link: '/mountain' },
    { img: Rain, title: 'Rainy beach', link: '/rainy' },
  ];

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
