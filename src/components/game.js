import React, { Component } from 'react';
import GameBoard from './game_board.js';
import calculateWinner from './calculate_winner.js';
import styled from 'styled-components';


const MoveContainer = styled.div`
width: 50%;
height: 50;
border: 1px solid green;
`;

const List = styled.ol`
display: flex;
flex-direction: column;

`;
const Link = styled.a`
text-decoration: none;
color: white;
font-size: 1.3rem;
`;


const GameContainer = styled.div`
  width: 100%;
  height: 100%;
  overflowY: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.header`
  padding-bottom: 1rem;
  text-align: center;
  vertical-align: center;
  font-family: 'Helvetica';
  width: 100%
  height: 10%
  font-size: 1.6rem;
`;
const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20%;
  width: 100%;
`;

export class Game extends Component {
  constructor(){
    super();

    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber:0,
      xIsNext: true
    };
  }


  handleClick(i){
    //Redeclared functions twice as they need to exist in both scopes
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
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
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
  jumpTo(step){
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next Player: ${this.state.xIsNext ? 'X':'O'}`;
    }
    const Moves = history.map((step, move) => {
      const desc = move ? 'Move #' + move: 'Game start';
      return (
          <Link href="#" key={move} onClick={ () => this.jumpTo(move)}>{desc}</Link>
        );
});

return (
  <GameContainer>
    <GameBoard
      squares={current.squares}
      onClick={ (i) => this.handleClick(i)}

    />
    <GameInfo>
    <Title>{ status }</Title>
    <List>{Moves}</List>
    </GameInfo>
  </GameContainer>
  );
  }
}

