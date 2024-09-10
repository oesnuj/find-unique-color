import styled, { css, keyframes } from 'styled-components';

const flashAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${({ color }) => `${color}`};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  box-sizing: border-box;
  border: 0.5px white solid;

  ${({ flash }) => flash && css`
    animation: ${flashAnimation} 2s infinite;
  `}

  :hover {
    cursor: pointer;
  }
`;
