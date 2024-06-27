import React from 'react';
import AnimatedNumbers from 'react-animated-numbers';
import * as Styled from './styled';

function Point({ point }) {
  return (
    <Styled.Point>
      <AnimatedNumbers includeComma animateToNumber={point} />
    </Styled.Point>
  );
}

export default React.memo(Point);
