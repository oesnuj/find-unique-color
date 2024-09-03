import { useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

import { userNameState } from '../../recoil/auth';
import { GameStartModal, Wave } from '../../components';
import * as Styled from './styled';

function Home() {
  const [openModal, setModalOpen] = useState(false);
  const userName = useRecoilValue(userNameState);
  const navigation = useNavigate();

  const onOpenModal = useCallback(() => {
    if (userName) {
      navigation('/play');
      return;
    }

    setModalOpen(true);
  }, [navigation, userName]);

  const onCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const onClickRank =() => {
    navigation('/rank');
  }


  return (
    <Styled.Container>
      <Wave></Wave>
      <Styled.Title>다른 색깔 고르기</Styled.Title>
      <Styled.SubTitle>Wag Mini Game</Styled.SubTitle>
      <Styled.PlayButton onClick={onOpenModal}>게임 시작</Styled.PlayButton>
      <Styled.RankButton onClick={onClickRank}>랭크 보기</Styled.RankButton>
      <GameStartModal openModal={openModal} onCloseModal={onCloseModal} />
    </Styled.Container>
  );
}

export default Home;
