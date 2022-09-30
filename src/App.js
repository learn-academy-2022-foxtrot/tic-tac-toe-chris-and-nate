import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(0)
  const [counter, setCounter] = useState(0)
  const [gamePlay, setGamePlay] = useState(true)
  const [message, setMessage] = useState("")
  //console.log(squares)
  const handleGamePlay = (squareIndex) => {
    let updateBoard = [...squares]

    if (player % 2 === 0 && updateBoard[squareIndex] !== "❌" && updateBoard[squareIndex] !== "⭕️") {
      updateBoard[squareIndex] = "⭕️"
      setSquares(updateBoard)
      setPlayer(player + 1)
      setCounter(counter + 1)

    } else if (player % 2 !== 0 && updateBoard[squareIndex] !== "⭕️" && updateBoard[squareIndex] !== "❌") {
      updateBoard[squareIndex] = "❌"
      setSquares(updateBoard)
      setPlayer(player + 1)
      setCounter(counter + 1)

    }

  }


  let isWinner = () => {
    let winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < winner.length; i++) {
      const [a, b, c] = winner[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

        return squares[a]

      }


    }
    return null
  }

  if (gamePlay) {
    if (isWinner(squares) === "❌") {
      console.log("X is winner")
      setMessage(<h1>❌ WINS!</h1>)
      setGamePlay(false)
    } else if (isWinner(squares) === "⭕️") {
      console.log("⭕️ is the winner")
      setMessage(<h1>⭕️ WINS!</h1>)
      setGamePlay(false)
    } else if(squares.indexOf(null) === -1){
      console.log("no turn/ draw")
      setMessage(<h1>DRAW!</h1>)
      setGamePlay(false)
    }

  }



  const handleReset = () => {
    setSquares(Array(9).fill(null))
    setMessage("")
    setGamePlay(true)
  }

  return (
    <div className="body">

      <h1>Tic Tac Toe</h1>
      <br />
      <div className='board'>
        {message}
        {squares.map((squares, index) => {
          return (
            <Square
              squares={squares}
              index={index}
              key={index}
              handleGamePlay={handleGamePlay}
            />
          )
        })}
      </div>
      <br />
      <div className="button">
        <button onClick={handleReset}>Restart Game</button>
      </div>
    </div>
  )
}


export default App