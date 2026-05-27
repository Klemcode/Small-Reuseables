import React, { useState } from 'react'
import AddUserForm from './AddUserForm'
import UserList from './UserList'
import EditModal from './EditModal'

const Login = () => {

  const [users, setUsers] = useState([])

  const [editIndex, setEditIndex] = useState(null)

  const [editFirstName, setEditFirstName] = useState('')
  const [editLastName, setEditLastName] = useState('')
  const [editEmail, setEditEmail] = useState('')
  const [editPassword, setEditPassword] = useState('')


  // Add User
  const addUser = (newUser) => {
    setUsers([...users, newUser])
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


  // Save Edit
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

        <AddUserForm addUser={addUser} />

        <UserList
          users={users}
          deleteUser={deleteUser}
          editUser={editUser}
        />

      </div>


      <EditModal

        editFirstName={editFirstName}
        setEditFirstName={setEditFirstName}

        editLastName={editLastName}
        setEditLastName={setEditLastName}

        editEmail={editEmail}
        setEditEmail={setEditEmail}

        editPassword={editPassword}
        setEditPassword={setEditPassword}

        saveEdit={saveEdit}

      />

    </>
  )
}

export default Login