import { useEffect, useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { Board, Timer, Stage, Point, GameOverModal } from '../../components';
import useTimer from '../../hooks/useTimer';
import usePoint from '../../hooks/usePoint';
import useStage from '../../hooks/useStage';
import { userNameState } from '../../recoil/auth';
import { postRank } from '../../api/postRank';
import * as Styled from './styled';

function Play() {
  const [openModal, setModalOpen] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false); // 게임 오버 상태 추가
  const userName = useRecoilValue(userNameState);

  const {
    stage,
    animationActive: stageAnimationActive,
    clearStage,
    resetStage,
  } = useStage();
  const {
    time,
    animationActive: timerAnimationActive,
    startTimer,
    stopTimer,
    resetTimer,
    minusTime,
  } = useTimer();
  const { point, resetPoint, scorePoint } = usePoint();

  const handleAnswerCardClick = useCallback(() => {
    if (isGameOver) return; 
    clearStage();
    resetTimer();
    scorePoint(stage, time);
  }, [clearStage, resetTimer, scorePoint, stage, time, isGameOver]);

  const handleWrongCardClick = useCallback(() => {
    if (isGameOver) return;
    minusTime();
  }, [minusTime, isGameOver]);

  const onOpenModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setModalOpen(false);
    resetStage();
    resetTimer();
    resetPoint();
    startTimer();
    setIsGameOver(false); 
  }, [resetPoint, resetStage, resetTimer, startTimer]);

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [startTimer, stopTimer]);

  useEffect(() => {
    if (time < 0) {
      stopTimer();
      resetTimer();
      setIsGameOver(true);
      setTimeout(() => {
        onOpenModal();
      }, 3000);
      const submitScore = async () => {
        try {
          await postRank(userName, stage); 
        } catch (error) {
          console.error('Failed to submit score', error);
        }
      };
      submitScore();
    }
  }, [onOpenModal, resetTimer, stage, stopTimer, time, userName]);

  return (
    <Styled.Container>
      <Stage active={stageAnimationActive} stage={stage} />
      <Timer active={timerAnimationActive} time={time} />
      <Board
        handleAnswerCardClick={handleAnswerCardClick}
        handleWrongCardClick={handleWrongCardClick}
        stage={stage}
        isGameOver={isGameOver}
      />
      <Point point={point} />
      <Styled.UserName>
        {userName}님
        <br />
        기록되고 있습니다!
      </Styled.UserName>
      {isGameOver && (
        <Styled.AnswerNotice>앗.. 이걸 놓치셨네요! 다시 해보세요</Styled.AnswerNotice>
      )}
      <GameOverModal
        point={point}
        stage={stage}
        openModal={openModal}
        onCloseModal={onCloseModal}
      />
    </Styled.Container>
  );
}

export default Play;
