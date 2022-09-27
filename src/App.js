import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(0)
  const [counter, setCounter] = useState(0)
  //console.log(squares)
  const handleGamePlay = (squareIndex) => {
    let updateBoard = [...squares]

    if(player % 2 === 0 && updateBoard[squareIndex] !== "❌" && updateBoard[squareIndex]!=="⭕️") {
      updateBoard[squareIndex]= "⭕️" 
      setSquares(updateBoard)
      setPlayer(player + 1)
      setCounter(counter + 1)
    }  else if(player % 2 !== 0 && updateBoard[squareIndex] !== "⭕️" && updateBoard[squareIndex]!=="❌") {
      updateBoard[squareIndex]= "❌" 
      setSquares(updateBoard)
      setPlayer(player + 1)
      setCounter(counter + 1)
  }
  }

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
        alert ("You Win") 
      } 
    }
      if(counter === squares.length){
          alert ("DRAW")
        }
    
  

  const handleReset = () => {
    setSquares(Array(9).fill(null))
  }
  
  
  //   let boardUpdate = [...squares]
  //   boardUpdate[index] = "❌"
  //   setSquares(boardUpdate)

  // }
// const handleGamePlay = (clickedSquare) => {
//   let updatedBoard = [...board]
//   if(clickedSquare !== )
// }

  return (
    <>
    <body>
      <h1>Tic Tac Toe</h1>
      <br />
      <div className='board'>
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
      </body>
    </>
  )
}


export default App