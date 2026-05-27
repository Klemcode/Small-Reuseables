import React from 'react'
import Button from './Button'

const UserCard = ({
  element,
  index,
  deleteUser,
  editUser
}) => {

  return (

    <div className="col-md-4 mb-4">

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
  )
}

export default UserCard