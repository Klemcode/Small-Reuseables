import React, { useEffect, useState } from 'react'

const Fetch = () => {

let url= import.meta.env.VITE_BASE_URL

// console.log(url);
const [users, setusers] = useState([])

useEffect(() => {
    
    const makeRequest= async () => {
       let response= await fetch (`${url}/users`) 
    //    console.log(response);
       
       let data = await response.json()
       console.log(data);
       setusers(data)
       
    }
    makeRequest()

 
}, [])


  return (
    <>
    <h1>This is the API Request Page</h1>

{
<div className="d-flex gap-3 flex-wrap">
  {users.map((arr) => (
    <div
      key={arr.id}
      className="card"
      style={{ width: "18rem" }}
    >
      <img
        src="https://www.afternic.com/forsale/imgs/dan-custom/secure-transactions.svg"
        className="card-img-top"
        alt={arr.name}
         className='rounded-circle'
    style={{
    width: '120px',
    height: '120px',
    objectFit: 'cover'
  }}
      />

      <div className="card-body">
        <h5 className="card-title">{arr.name}</h5>
        <p className="card-text">{arr.email}</p>
        <a href="#" className="btn btn-success">
          {arr.username}
        </a>
      </div>
    </div>
  ))}
</div>

}


    </>
  )
}

export default Fetch