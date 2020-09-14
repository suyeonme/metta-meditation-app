import React from 'react';
import styled from 'styled-components';

import { Title } from '../../style/style';

const Container = styled.div`
  width: 280px;
  height: 320px;
  border-radius: 7px;
  background: #fff;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  margin-right: 3rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ImgContainer = styled.div`
  width: 80%;
  margin: 0 auto 5rem;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`;

function Card({ img, title }) {
  return (
    <Container>
      <ImgContainer>
        <img src={img} alt={img} />
      </ImgContainer>
      <Title size="xs">{title}</Title>
    </Container>
  );
}

export default Card;
