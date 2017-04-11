import React from 'react';
import styled from 'styled-components';

const MoveContainer = styled.div`
width: 50%;
height: 50;
border: 1px solid green;
`;

const Link = styled.a`
text-decoration: none,
color: white;
font-size: 1.3rem;
`;

function tap(x) {
  return x;
}
const Moves  = (props) => {


  return (
    props.history.map((step, move) => {
      const desc = move ? 'Move #' + move: 'Game start';
      return ( <MoveContainer>
        <Link href="#" key={move} onClick={ () => this.jumpTo(move)}>{desc}</Link>
      </MoveContainer>);
    })
  );
};


export default Moves;
