import React from 'react';
import * as Styled from './styled';

function Card({ size, color, onClick }) {
  return <Styled.Card onClick={onClick} color={color} size={size} />;
}

export default Card;
