import React, { Component } from 'react';
import styled from 'styled-components';
import Square from './square.js';
import calculateWinner from './calculate_winner.js';

const OuterBorder = styled.div`
width: 80%;
height: 80%;
border: 1px black solid;
`;
const GameRow = styled.div`
display: flex;
flex-basis:1;
height: 33.33%;
`;
// function tap(x) {
//   console.log('tap', x);
//   return x;
// }




class GameBoard extends Component {

  renderGameSquare(i){
    return <Square value={this.props.squares[i]} onClick={ () => this.props.onClick(i)} />;
  }

  render() {
    return (
      <OuterBorder>
        <GameRow>
          { this.renderGameSquare(0) }
          { this.renderGameSquare(1) }
          { this.renderGameSquare(2) }
        </GameRow>
        <GameRow>
          { this.renderGameSquare(3) }
          { this.renderGameSquare(4) }
          { this.renderGameSquare(5) }
        </GameRow>
        <GameRow>
          { this.renderGameSquare(6) }
          { this.renderGameSquare(7) }
          { this.renderGameSquare(8) }
        </GameRow>
      </OuterBorder>
      );
  }
}

export default GameBoard;
