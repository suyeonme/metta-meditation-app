import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const sizes = {
  xl: {
    fontWeight: 700,
    fontSize: '3.5rem',
  },
  lg: {
    fontWeight: 700,
    fontSize: '3rem',
  },
  md: {
    fontWeight: 400,
    fontSize: '3rem',
  },
  sm: {
    fontWeight: 400,
    fontSize: '1.6rem',
  },
  xs: {
    fontWeight: 400,
    fontSize: '1.2rem',
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    font-weight: ${sizes[size].fontWeight};
    font-size: ${sizes[size].fontSize};
  `}
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  font-weight: 400;
  ${'' /* ${sizeStyles}

  @media (max-width: 900px) {
    font-size: 2.8rem;
  }

  @media (max-width: 900px) {
    text-align: center;
  }

  @media (max-width: 576px) {
    font-size: 2.5rem;
  }

  @media (max-width: 320px) {
    font-size: 2.2rem;
  } */}
`;

// export const Title = styled.h1`
//   margin-bottom: 2rem;
//   ${sizeStyles}

//   @media (max-width: 900px) {
//     font-size: 2.8rem;
//   }

//   @media (max-width: 900px) {
//     text-align: center;
//   }

//   @media (max-width: 576px) {
//     font-size: 2.5rem;
//   }

//   @media (max-width: 320px) {
//     font-size: 2.2rem;
//   }
// `;

export const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
