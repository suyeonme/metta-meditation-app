import { keyframes } from 'styled-components';

export const pulse = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  70% {
    transform: translate(-50%, -50%) scale(1.1);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const fade = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
