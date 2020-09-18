import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BigTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    font-size: 2.8rem;
    text-align: center;
  }

  @media (max-width: 576px) {
    font-size: 2.5rem;
  }

  @media (max-width: 320px) {
    font-size: 2.2rem;
  }
`;

export const MediumTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 576px) {
    font-size: 2.2rem;
  }

  @media (max-width: 320px) {
    font-size: 1.9rem;
  }
`;

export const SmallTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 2rem;

  @media (max-width: 576px) {
    font-size: 1.3rem;
  }

  @media (max-width: 320px) {
    font-size: 1.1rem;
  }
`;

export const ExtraSmallTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
