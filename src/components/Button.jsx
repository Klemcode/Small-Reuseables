import React from 'react'


const Button = (props) => {

  // console.log(props);
  
  //   let name="Clement"
  //   const shout=(name)=>{
  //        alert(`You are a world class developer ${name}`)
  //   }
  return (
    <div className= {`btn ${props.color}`} onClick={props.func}>{props.title}</div>
  )
}

export default Button

