import React from 'react'
import UserCard from './UserCard'

const UserList = ({ users, deleteUser, editUser }) => {

  return (

    <div className="row">

      {
        users.map((element, index) => (

          <UserCard
            key={index}
            element={element}
            index={index}
            deleteUser={deleteUser}
            editUser={editUser}
          />

        ))
      }

    </div>
  )
}

export default UserList