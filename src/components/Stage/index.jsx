import React from 'react';
import * as Styled from './styled';

function Stage({ active, stage }) {
  return (
    <Styled.StageContainer>
      <Styled.Stage active={active}>{stage}</Styled.Stage>
      <Styled.StageText>스테이지</Styled.StageText>
    </Styled.StageContainer>
  );
}

export default React.memo(Stage);
