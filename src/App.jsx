import React, { useState } from 'react'
import Button from './components/Button'
import Login from './components/Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Navbar from './components/Navbar'
import Notfound from './pages/Notfound'
import Profile from './pages/Profile'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import UserProfile from './pages/UserProfile'
import Settings from './pages/settings'
import Effect from './pages/Effect'
import Fetch from './pages/Fetch'

const App = () => {

  const [Score, setScore] = useState(0)

  const increaseScore = () => {
    setScore(Score + 1)
  }

  const decreaseScore = () => {

    if (Score > 0) {
      setScore(Score - 1)
    }
  }



  const [Parada, setParada] = useState('XXXXXXXX')

  const firstParada = () => {

    if (Parada === 'XXXXXXXX') {
      setParada('Kehinde Clement Agbonyin')

    } else {
      setParada('XXXXXXXX')
    }
  }


  const shoutName = () => {
    alert("Clement is here")
  }


  return (
    <>
<Navbar/>
{/* <Effect/> */}

      <Routes>

        <Route
          path="/"
          element={
            <>

              <p>App power: {Score}</p>

              <button onClick={increaseScore}>
                Increase Power
              </button>

              <button onClick={decreaseScore}>
                Decrease Power
              </button>


              <p>
                Who are you? I am {Parada}
              </p>

              <button onClick={firstParada}>
                Show Name
              </button>


              <Login />


              <Button
                title="Go"
                color="btn-success"
                func={shoutName}
              />

              <Button
                title="Wait"
                color="btn-warning"
              />

              <Button
                title="Stop"
                color="btn-danger"
              />

            </>
          }
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route path="/sp-about" element={<Navigate to={"/about"}/>}/>
        <Route path="/Notfound" element={<Notfound />} />
         <Route path="*" element={<Navigate to={"/Notfound"}/>}/>
        <Route path='/profile/:user' element={<Profile/>}/>

          
 <Route path="/employee" element={<Layout />}>
  <Route path="/employee/dashboard" element={<Dashboard />} />
  <Route path="/employee/profile" element={<UserProfile />} />
   <Route path="/employee/settings" element={<Settings />} />
    <Route path="/employee/fetch" element={<Fetch />} />
</Route>

      </Routes>

           

    </>
  )
}

export default App