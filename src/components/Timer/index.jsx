import React from 'react';
import * as Styled from './styled';

function Timer({ time, active }) {
  return (
    <Styled.Container time={time} active={active}>
      <Styled.Background>
        <Styled.Time>{time}</Styled.Time>
      </Styled.Background>
      <Styled.Progress time={time} />
    </Styled.Container>
  );
}

export default Timer;
