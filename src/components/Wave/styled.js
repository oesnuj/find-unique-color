import styled, { keyframes } from 'styled-components';

const waveAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;


export const WaveOne = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  width: 200vw;
  height: 200vw;
  margin-left: -100vw;
  margin-top: -200vw;
  border-radius: 40%;
  animation: ${waveAnimation} 16000ms infinite linear;
  opacity: 0.1;
  background: #bd53e0;
`;

export const WaveTwo = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  width: 200vw;
  height: 200vw;
  margin-left: -100vw;
  margin-top: -200vw;
  border-radius: 40%;
  animation: ${waveAnimation} 13500ms infinite linear;
  opacity: 0.1;
  background: yellow;
`;

export const WaveThree = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  width: 200vw;
  height: 200vw;
  margin-left: -100vw;
  margin-top: -200vw;
  border-radius: 40%;
  animation: ${waveAnimation} 11000ms infinite linear;
  opacity: 0.1;
  background: #1e70eb;
`;

export const WaveContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;
