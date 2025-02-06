import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from "styled-components"
import RollDice from './RollDice'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {
  const [score,setScore]=useState(0);
  const [selectNum,setSelectNum]=useState(0);
  const [currentDice, setCurrentDice]=useState(1);
  const [error,setError] = useState("");
  const [showRules,setShowRules] = useState(false);

  const generateRandomNumber= (min,max)=> {

  
    return Math.floor(Math.random() * (max - min) + min);
  };
  
  const rollDice = ()=>{

  
    if(!selectNum){
      setError("You have not selected any number");

      return};
    
    const randomNum= generateRandomNumber(1,7);
  
    setCurrentDice((prev)=>randomNum);


if(selectNum===randomNum){
  setScore((prev)=>prev+randomNum)
}else{
  setScore((prev)=>prev-2)
}
setSelectNum(undefined);
  };
  const resetScore = ()=>{
    setScore(0);
  }


  return (
    <MainContainer>
        <div className='top_section'>
          <TotalScore 
          score={score} />
          <NumberSelector
          selectNum={selectNum} setSelectNum={setSelectNum} error={error} setError={setError} />
        </div>
        <RollDice 
        currentDice={currentDice} rollDice={rollDice} />
        <div className="btns">
          <OutlineButton  onClick={resetScore}>Reset</OutlineButton>
          <Button
          onClick={()=> setShowRules((prev)=>!prev)}>
          {showRules ? "Hide":"Show"} Rules</Button>
        </div>
       {showRules &&  <Rules /> }
    </MainContainer>
    

  )
}

export default GamePlay

const MainContainer=styled.div`
padding-top: 70px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px ;
    }
`
