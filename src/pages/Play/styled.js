import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
  width: 100vw;
  height: 100vh;
`;

export const UserName = styled.p`
  text-align: center;
  color: #b1b1b1;
  margin: 0;
`;
export const AnswerNotice = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  border-radius: 8px;
  font-size: 18px;
  text-align: center;
  max-width: 90%;
  width: 300px;

  @media (max-width: 600px) {
    font-size: 16px;
    width: 80%;
    padding: 15px;
  }

  @media (max-width: 400px) {
    font-size: 14px;
    width: 90%;
    padding: 10px;
  }
`;