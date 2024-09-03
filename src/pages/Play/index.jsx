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
    clearStage();
    resetTimer();
    scorePoint(stage, time);
  }, [clearStage, resetTimer, scorePoint, stage, time]);

  const handleWrongCardClick = useCallback(() => {
    minusTime();
  }, [minusTime]);

  const onOpenModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  const onCloseModal = useCallback(async () => {
    setModalOpen(false);
    resetStage();
    resetTimer();
    resetPoint();
    startTimer();
    try {
      await postRank(userName, stage); // 점수 제출
    } catch (error) {
      console.error('Failed to submit score');
    }
  }, [resetPoint, resetStage, resetTimer, startTimer, stage, userName]);
  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [startTimer, stopTimer]);

  useEffect(() => {
    if (time < 0) {
      stopTimer();
      onOpenModal();
      resetTimer();
    }
  }, [onOpenModal, point, resetTimer, stage, stopTimer, time]);

  return (
    <Styled.Container>
      <Stage active={stageAnimationActive} stage={stage} />
      <Timer active={timerAnimationActive} time={time} />
      <Board
        handleAnswerCardClick={handleAnswerCardClick}
        handleWrongCardClick={handleWrongCardClick}
        stage={stage}
      />
      <Point point={point} />
      <Styled.UserName>
        {userName}님
        <br />
        기록되고 있습니다!
      </Styled.UserName>
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
