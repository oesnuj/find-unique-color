import React, { useEffect, useState } from 'react';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';
import { getRank } from '../../api/getRank';

function Rank() {
  const [rankData, setRankData] = useState([]);
  const navigation = useNavigate();

  const onClickHome = () => {
    navigation('/');
  };

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
            <Styled.Rank>
              {index < 3 ? ['🥇', '🥈', '🥉'][index] : index + 1}
            </Styled.Rank>
            <Styled.Name>{item.name}</Styled.Name>
            <Styled.StageRecord>{item.stageRecord}</Styled.StageRecord>
          </Styled.RankingItem>
        ))}
      </Styled.RankingList>
      <Styled.HomeButton onClick={onClickHome}>메인으로 이동</Styled.HomeButton>
    </Styled.RankingContainer>
  );
}

export default Rank;
