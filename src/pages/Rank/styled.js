import styled from 'styled-components';

export const RankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

export const RankingList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 400px;
`;

export const RankingItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 10px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const Rank = styled.span`
  font-weight: bold;
  font-size: 1.25rem;
  color: ${props => props.color || '#555'};
`;

export const Name = styled.span`
  font-size: 1rem;
  color: #333;
`;

export const StageRecord = styled.span`
  font-size: 1rem;
  color: #666;
`;

export const HomeButton = styled.button`
  width: 200px;
  height: 40px;
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