import { useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate, Link } from 'react-router-dom';

import { userNameState } from '../../recoil/auth';
import { GameStartModal } from '../../components';
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

  return (
    <Styled.Container>
      <Styled.Title>다른 색깔 찾기 게임 </Styled.Title>
      <Styled.SubTitle>Web Programming Final Project</Styled.SubTitle>
      <Styled.PlayButton onClick={onOpenModal}>게임 시작</Styled.PlayButton>
      <Link to="/rank">
        <Styled.RankButton>랭크 보기</Styled.RankButton>
      </Link>
      <GameStartModal openModal={openModal} onCloseModal={onCloseModal} />
    </Styled.Container>
  );
}

export default Home;
