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
  ${sizeStyles}
`;

export const FlexColDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center:
`;

export const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
