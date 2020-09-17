import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Title } from '../../style/style';

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
`;

const ImgContainer = styled.div`
  width: 70%;
  margin-top: auto;
`;

const CardTitle = styled(Title)`
  margin-top: auto;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
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
    ${'' /* padding: 3rem 0; */}
  }
`;

function Card({ img, title }) {
  return (
    <Container>
      <ImgContainer>
        <img src={img} alt={img} />
      </ImgContainer>
      <CardTitle>{title}</CardTitle>
    </Container>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};

export default React.memo(Card);
