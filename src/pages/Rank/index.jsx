import React, { useEffect, useState } from 'react';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';
import { getRank } from '../../api/getRank';

function Rank() {
  const [rankData, setRankData] = useState([]);
  const navigation = useNavigate();
  const onClickHome =() => {
    navigation('/');
  }


  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFA500', '#800080', '#FFC0CB', '#FFD700', '#00FFFF', '#800000', '#008000'];
  const emojis = ['🥇', '🥈', '🥉']; 


  useEffect(() => {
    const fetchRankData = async () => {
      try {
        const response = await getRank();
        if (response && response.miniGameRankingDtos) {
          const top10Data = response.miniGameRankingDtos.slice(0, 10);
          setRankData(top10Data);
        }
      } catch (error) {
        console.error('Failed to fetch rank data:', error);
      }
    };

    fetchRankData();
  }, []);

  return (
    <Styled.RankingContainer>
      <Styled.Title>Ranking</Styled.Title>
      <Styled.RankingList>
        {rankData.map((item, index) => (
          <Styled.RankingItem key={index}>
            <Styled.Rank color={index < 3 ? colors[index] : '#555'}>
              {index < 3 ? emojis[index] : index + 1}
            </Styled.Rank>
            <Styled.Name>{item.name}</Styled.Name>
            <Styled.StageRecord>{item.stageRecord}</Styled.StageRecord>
          </Styled.RankingItem>
        ))}
      </Styled.RankingList>
      <Styled.HomeButton onClick={onClickHome}>메인으로 이동</Styled.HomeButton>
    </Styled.RankingContainer>
  );
};


export default Rank;