import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState("❌")
  console.log(squares)
  const handleGamePlay = (squareIndex) => {
    let updateBoard = [...squares]
    if(squares[squareIndex] === null) {
      updateBoard[squareIndex] = player
      setSquares(updateBoard)
    } else if(squareIndex)  {
      updateBoard[squareIndex] = ""
    } else {
    updateBoard[squareIndex] = ""
    }
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
      <h1>Tic Tac Toe</h1>
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
    </>
  )
}


export default App