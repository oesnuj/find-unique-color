import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5px;
  width: 100vw;
  height: 100vh;
  overflow: hidden; 
`;

export const Title = styled.h1`
  font-size: 70px;
   @media (max-width: 768px) {
    font-size: 50px; 
  }

  @media (max-width: 480px) {
    font-size: 35px; 
  }
`;

export const SubTitle = styled.h2`
  font-size: 30px;
  color: rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    font-size: 25px;
  }

  @media (max-width: 480px) {
    font-size: 18px; 
  }
`;

export const PlayButton = styled.button`
  width: 320px;
  height: 50px;
  background-color: rgba(72, 209, 204, 1);
  border: none;
  color: white;
  font-size: 20px;
  transition: all 0.3s ease;
  margin-top: 30px;
  cursor: pointer;
  outline: none;
  position: relative;
  overflow: hidden;
  font-weight: bold;
  border-radius: 10px;
  box-sizing: border-box; 

  &:hover {
    background-color: rgba(72, 209, 204, 0.8);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    background-color: rgba(255, 255, 255, 0.1);
    opacity: 0;
    transform: translate(-50%, -50%) rotate(45deg);
    transition: all 0.3s ease;
    pointer-events: none;
    border-radius: 10px;
  }

  &:hover:before {
    opacity: 1;
    width: 200%;
    height: 200%;
  }

  @media (max-width: 768px) {
    width: 260px; 
    height: 45px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 40px;
    font-size: 16px;
  }
`;

export const RankButton = styled(PlayButton)`
  background-color: rgba(255, 165, 0, 1);
  margin-top: 10px;

  &:hover {
    background-color: rgba(255, 165, 0, 0.8);
  }
`;
