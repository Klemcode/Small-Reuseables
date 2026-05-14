import React, { useState } from 'react'

const Login = () => {

  // Add User States
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  // Users Array
  const [users, setUsers] = useState([])

  // Edit States
  const [editIndex, setEditIndex] = useState(null)

  const [editFirstName, setEditFirstName] = useState('')
  const [editLastName, setEditLastName] = useState('')
  const [editEmail, setEditEmail] = useState('')
  const [editPassword, setEditPassword] = useState('')


  // Input Functions
  const fname = (e) => {
    setfirstName(e.target.value)
  }

  const lname = (e) => {
    setlastName(e.target.value)
  }

  const emaill = (e) => {
    setemail(e.target.value)
  }

  const pwd = (e) => {
    setpassword(e.target.value)
  }


  // Add User
  const mayowa = () => {

    const newUser = {
      firstName,
      lastName,
      email,
      password
    }

    setUsers([...users, newUser])

    // Clear Inputs
    setfirstName('')
    setlastName('')
    setemail('')
    setpassword('')
  }


  // Delete User
  const deleteUser = (index) => {

    let newAllUsers = [...users]

    newAllUsers.splice(index, 1)

    setUsers(newAllUsers)
  }


  // Open Edit Modal
  const editUser = (index) => {

    setEditIndex(index)

    setEditFirstName(users[index].firstName)
    setEditLastName(users[index].lastName)
    setEditEmail(users[index].email)
    setEditPassword(users[index].password)
  }


  // Save Edited User
  const saveEdit = () => {

    let updatedUsers = [...users]

    updatedUsers[editIndex] = {
      firstName: editFirstName,
      lastName: editLastName,
      email: editEmail,
      password: editPassword
    }

    setUsers(updatedUsers)
  }


  return (
    <>

      <div className="container mt-5">

        <h2 className="mb-4">
          User Registration
        </h2>

        <input
          type="text"
          placeholder='First Name'
          value={firstName}
          onChange={fname}
          className='form-control mb-3'
        />

        <input
          type="text"
          placeholder='Last Name'
          value={lastName}
          onChange={lname}
          className='form-control mb-3'
        />

        <input
          type="email"
          placeholder='Email'
          value={email}
          onChange={emaill}
          className='form-control mb-3'
        />

        <input
          type="text"
          placeholder='Password'
          value={password}
          onChange={pwd}
          className='form-control mb-3'
        />

        <button
          onClick={mayowa}
          className='btn btn-primary mb-5'
        >
          Submit
        </button>



        {/* Display Users */}

        <div className="row">

          {
            users.map((element, index) => (

              <div
                className="col-md-4 mb-4"
                key={index}
              >

                <div className="card shadow">

                  <div className="card-body">

                    <h5 className="card-title">
                      {element.firstName} {element.lastName}
                    </h5>

                    <p className="card-text">
                      {element.email}
                    </p>

                    <p className="card-text">
                      {element.password}
                    </p>

                    <button
                      className='btn btn-success me-2'
                      onClick={() => editUser(index)}
                      data-bs-toggle="modal"
                      data-bs-target="#editModal"
                    >
                      Edit
                    </button>

                    <button
                      className='btn btn-danger'
                      onClick={() => deleteUser(index)}
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </div>

            ))
          }

        </div>

      </div>



      {/* Bootstrap Modal */}

      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
      >

        <div className="modal-dialog">

          <div className="modal-content">

            <div className="modal-header">

              <h5 className="modal-title">
                Edit User
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>

            </div>


            <div className="modal-body">

              <input
                type="text"
                className="form-control mb-3"
                placeholder="First Name"
                value={editFirstName}
                onChange={(e) => setEditFirstName(e.target.value)}
              />

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Last Name"
                value={editLastName}
                onChange={(e) => setEditLastName(e.target.value)}
              />

              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
              />

              <input
                type="text"
                className="form-control"
                placeholder="Password"
                value={editPassword}
                onChange={(e) => setEditPassword(e.target.value)}
              />

            </div>


            <div className="modal-footer">

              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <button
                type="button"
                className="btn btn-primary"
                onClick={saveEdit}
                data-bs-dismiss="modal"
              >
                Save Changes
              </button>

            </div>

          </div>

        </div>

      </div>

    </>
  )
}

export default Login