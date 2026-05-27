import React, { useEffect, useState } from 'react'

const Effect = () => {

    const [plus, setplus] = useState(0)
    const [oruko, setoruko] = useState("Akorede")

    useEffect(() => {
      
        console.log('useEffect');
        


    }, [plus])
    

  return (
    <div> <h3>Effect Start</h3>

    <h1 onClick={()=>setplus(plus+1)}>{plus}</h1>
    <h1 onClick={()=>setoruko("Clement")}>{oruko}</h1>


<h3>Effect End</h3>
    </div>




  )
}

export default Effect