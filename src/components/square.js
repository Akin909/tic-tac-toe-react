import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';



const GameSquares = styled.button`
width: 33.33%;
width: 33.33%;
height: 100%;
border: black 1px solid;
background: white;
font-size: 2rem;
`;


function Square(props) {
  return (
    <GameSquares onClick={ () => props.onClick()} >
      { props.value }
    </GameSquares>
    );
}

export default Square;
