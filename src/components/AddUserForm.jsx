import React, { useState } from 'react'

const AddUserForm = ({ addUser }) => {

  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')


  const submitUser = () => {

    const newUser = {
      firstName,
      lastName,
      email,
      password
    }

    addUser(newUser)

    setfirstName('')
    setlastName('')
    setemail('')
    setpassword('')
  }


  return (
    <>

      <h2 className="mb-4">
        User Registration
      </h2>

      <input
        type="text"
        placeholder='First Name'
        value={firstName}
        onChange={(e) => setfirstName(e.target.value)}
        className='form-control mb-3'
      />

      <input
        type="text"
        placeholder='Last Name'
        value={lastName}
        onChange={(e) => setlastName(e.target.value)}
        className='form-control mb-3'
      />

      <input
        type="email"
        placeholder='Email'
        value={email}
        onChange={(e) => setemail(e.target.value)}
        className='form-control mb-3'
      />

      <input
        type="text"
        placeholder='Password'
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        className='form-control mb-3'
      />

      <button
        onClick={submitUser}
        className='btn btn-primary mb-5'
      >
        Submit
      </button>

    </>
  )
}

export default AddUserForm