import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'


const handleGamePlay = (clickedSquare) => {
  let updatedBoard = [...board]
  if(clickedSquare !== )
}

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='board'>
      {squares.map((square, index) => {
          return (
          <Square
          square={square}
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