import React, { Component } from 'react';
import Board from './Board';

var arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
function getLines(arr1) {
  var arr = [];
  var lineSize = Math.sqrt(arr1.length);
  var isGoodToGo = (lineSize % 1) !== 0 ? false : true;
  if (isGoodToGo) {    //getting rows
    for (let i = 0; i < arr1.length;) {
      let temp1 = [];
      for (let j = 0; j < lineSize; j++) {
        temp1.push(arr1[i + j]);
      }
      arr.push(temp1);
      i += lineSize;
    }    //getting columns
    for (let a = 0; a < lineSize; a++) {
      let temp2 = [];
      var counter = a;
      for (let k = 0; k < lineSize; k++) {
        temp2.push(arr1[counter]);
        counter += lineSize;
      }
      arr.push(temp2);
    }    //getting diagolans
    var dig1 = [],
      dig2 = [];
    for (let i = 0; i < lineSize; i++) {
      dig1.push(arr1[i * lineSize + i]);
      dig2.push(arr1[(lineSize - i) * lineSize - (lineSize - i)]);
    }
    arr.push(dig1, dig2);

  }
  return arr;
}
function calculateWinner(squares) {
  var lines = getLines(arr1);
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
class Game extends Component {
  constructor(props) {
      super(props);
      this.state = {
          history: [{
              squares: Array(9).fill(null)
          }],
          stepnumber: 0,
          itsX: true
      }
  }
  jumpTo(step) {
      this.setState({
          stepnumber: step,
          itsX: (step % 2) === 0,
      });
  }
  handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepnumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
          return;
      }
      squares[i] = this.state.itsX ? 'X' : 'O';
      this.setState({
          history: history.concat([{
              squares: squares,
          }]),
          stepnumber: history.length,
          itsX: !this.state.itsX,
      });
  }
  render() {
      const history = this.state.history;
      const current = history[this.state.stepnumber];
      const winner = calculateWinner(current.squares);
      const moves = history.map((step, move) => {
          const desc = move ?
              'Go to move #' + move :
              'Go to game start';
          return (
              <li key={move}>
                  <button onClick={() => this.jumpTo(move)}>{desc}</button>
              </li>
          );
      });
      let status;
      let moveNumber = this.state.history.length;
      if (moveNumber === 1) {
          status = "Let's start";
      } else if (winner && moveNumber !== 10) {
          status = "Winner is: " + winner;
      } else if (moveNumber === 10) {
          status = "It's a tie, click Go to game start";
      } else {
          status = "Next player: " + (this.state.itsX ? "X" : "O");
      }
      return (
              < div className="game">
                  <div className="game-board">
                      <Board
                          squares={current.squares}
                          onClick={i => this.handleClick(i)}
                      />
                  </div>
                  <div className="game-info">
                      <div>{status}</div>
                      <ol>{moves}</ol>
                  </div>
              </div>
      );
  }
}
export default Game;