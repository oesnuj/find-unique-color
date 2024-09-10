import styled, { css, keyframes } from 'styled-components';

const flashAnimation = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
    background-color: ${({ color }) => `${color}`};
  }
  50% {
    opacity: 0.2;
    transform: scale(1.1);
    background-color: ${({ color }) => `${color}`};
  }
  100% {
    opacity: 1;
    transform: scale(1);
    background-color: ${({ color }) => `${color}`};
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
