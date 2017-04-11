import React, { Component } from 'react';
import styled, { injectGlobal} from 'styled-components';
import { Game, Title } from './components/game.js';

injectGlobal`
  html {
    width:100%;
    height:100%;
  }

  body {
    width:100%;
    height:100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: inherit;
  }
`;

const OuterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: skyBlue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
class App extends Component {
  render() {
    return (
      <OuterContainer>
        <Title>Tic-Tac-Toe</Title> 
        <Game/>
      </OuterContainer>
    );
  }
}

export default App;
