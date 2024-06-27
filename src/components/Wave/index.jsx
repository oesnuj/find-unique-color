import React from 'react';
import * as Styled from './styled';

function Wave() {
  return (
    <Styled.WaveContainer>
      <Styled.WaveOne className="wave -one" />
      <Styled.WaveTwo className="wave -two" />
      <Styled.WaveThree className="wave -three" />
    </Styled.WaveContainer>
  );
}

export default React.memo(Wave);
