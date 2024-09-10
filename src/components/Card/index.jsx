import React from 'react';
import * as Styled from './styled';

function Card({ size, color, onClick, flash }) {
  return <Styled.Card onClick={onClick} color={color} size={size} flash={flash} />;
}

export default Card;
