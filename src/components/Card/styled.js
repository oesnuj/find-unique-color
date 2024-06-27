import styled from 'styled-components';

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

  :hover {
    cursor: pointer;
  }
`;
