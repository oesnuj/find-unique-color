import React from 'react';
import * as Styled from './styled';

function Card({ size, color, onClick, flash }) {
  console.log('Card Flash Prop:', flash); // 디버깅
  return <Styled.Card onClick={onClick} color={color} size={size} flash={flash} />;
}

export default Card;
