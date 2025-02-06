import React, { useState } from 'react'
import styled from "styled-components"
const RollDice = ({rollDice, currentDice}) => {





  return (
    <DiceController>
      <div className='dice'
      onClick={rollDice}
      >
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice" />
      </div>
      <p>Click on Dice to roll</p>
      {console.log(currentDice)}

    </DiceController>
  )
}

export default RollDice

const DiceController = styled.div`

.dice{
    cursor: pointer;
}

margin-top: 48px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
p{
    font-size: 24px;
}

`;