import React, { Component } from 'react';
import GameBoard from './game_board.js';
import calculateWinner from './calculate_winner.js';
import styled from 'styled-components';



const GameContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.header`
text-align: center;
vertical-align: center;
font-family: 'Helvetica';
width: 100%
height: 10%
font-size: 1.6rem;
`;
const GameInfo = styled.div`
  height: 20%
  width: 100%;
  border: 1px blue solid
`;

class Game extends Component {
  constructor(){
    super();

    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true
    };
  }
  handleClick(i){
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares
      }]),
      xIsNext: !this.state.xIsNext,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    console.log('history', history);

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next Player: ${this.state.xIsNext ? 'X':'O'}`;
    }
    return (
      <GameContainer>
        <GameBoard 
          squares={current.squares} 
          onClick={ (i) => this.handleClick(i)}
        
        />
        <GameInfo>
        <Title>{ status }</Title>
          <ol>{/* TODO */}</ol>
        </GameInfo>
      </GameContainer>
      );
  }
}

export default Game;
