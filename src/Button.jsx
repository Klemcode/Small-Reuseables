import React from 'react'


const Button = () => {
    let name= "Clement"
    const shout=(name)=>{
         alert(`You are a world class developer ${name}`)
    }
  return (
    <div className='btn btn-success' onClick={() => shout(name)}>Click Me</div>
  )
}

export default Button