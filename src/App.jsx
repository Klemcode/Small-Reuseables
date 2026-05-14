import React, { useState } from 'react'
import Button from './Button'
import Login from './Login'

const App = () => {

  
const [Score, setScore] = useState(0)

//increase and decrease function using usestate
const increaseScore=()=>{
  setScore(Score+1)

}

const decreaseScore=()=>{
  if(Score>0){

  setScore(Score-1)

}
}
//end

const [Parada, setParada] = useState('XXXXXXXX')

const firstParada=()=>{

  if (Parada ==='XXXXXXXX'){
  setParada('Kehinde Clement Agbonyin')

} else{
  setParada('XXXXXXXX')
}

}
  return (

   
    <>
      <p>App power:  {Score}</p>
      <button onClick={increaseScore}>Increase Power</button>
        <button onClick={decreaseScore}>Decrease Power</button>

        <p>Who are you? I am {Parada}</p>
        <button onClick={firstParada}>Show Name</button>

 <Button />
 <Button />


<Login/>








    
    </>
  )
}

export default App