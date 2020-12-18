import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ExtraSmallTitle } from 'style/style';

const Container = styled.div`
  width: 280px;
  height: 320px;
  border-radius: 7px;
  background: #fff;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  transition: transform 0.2s ease-in;
  margin: 0 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 983px) {
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    width: 290px;
    height: 330px;
  }

  @media (max-width: 576px) {
    width: 270px;
    height: 310px;
  }

  @media (max-width: 320px) {
    width: 250px;
    height: 290px;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => `url(${props.img})`} no-repeat center center;
  background-size: cover;
`;

const CardTitle = styled(ExtraSmallTitle)`
  margin: 10px 0;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

function Card({ img, title }) {
  return (
    <Container>
      <ImgContainer img={img} />
      <CardTitle>{title}</CardTitle>
    </Container>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};

export default React.memo(Card);
