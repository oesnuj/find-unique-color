import React, { useCallback, useMemo } from 'react';
import { Card } from '..';
import * as Styled from './styled';
import { BOARD_SIZE } from '../../constants';

function Board({ stage, handleAnswerCardClick, handleWrongCardClick } ){
  const boardRow = useMemo(() => Math.round((stage + 0.5) / 2) + 1, [stage]);
  const cardAmount = useMemo(() => boardRow ** 2, [boardRow]);
  const cardSize = useMemo(() => BOARD_SIZE / (cardAmount / boardRow), [cardAmount, boardRow]);
  const answerCardIndex = useMemo(
    () => Math.floor(Math.random() * (Math.round((stage + 0.5) / 2) + 1) ** 2),
    [stage],
  );
  const difference = useMemo(() => (100 - stage * 2 > 5 ? 100 - stage * 2 : 5), [stage]);

  const pickRandomColor = useCallback(() => Math.floor(Math.random() * 256), []);
  const pickAnswerColor = useCallback(
    color => (color > 100 ? color - difference : color + difference),
    [difference],
  );

  const colors = useMemo(()=> {
    const red = pickRandomColor();
    const green = pickRandomColor();
    const blue = pickRandomColor();

    return {
      wrong: `rgb(${red}, ${green}, ${blue})`,
      answer: `rgb(${pickAnswerColor(red)}, ${pickAnswerColor(green)}, ${pickAnswerColor(blue)})`,
    };
  }, [pickRandomColor, pickAnswerColor]);

  const cards = useMemo(
    () =>
      Array.from(Array(cardAmount), (_, index) =>
        answerCardIndex === index ? (
          <Card
            onClick={handleAnswerCardClick}
            color={`${colors.answer}`}
            size={cardSize}
            key={index}
          />
        ) : (
          <Card
            onClick={handleWrongCardClick}
            color={`${colors.wrong}`}
            size={cardSize}
            key={index}
          />
        ),
      ),
    [
      cardAmount,
      answerCardIndex,
      handleAnswerCardClick,
      colors.answer,
      colors.wrong,
      cardSize,
      handleWrongCardClick,
    ],
  );

  return <Styled.Board>{cards}</Styled.Board>;
}

export default React.memo(Board);
