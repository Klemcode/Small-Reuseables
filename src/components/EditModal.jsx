import React from 'react'

const EditModal = ({

  editFirstName,
  setEditFirstName,

  editLastName,
  setEditLastName,

  editEmail,
  setEditEmail,

  editPassword,
  setEditPassword,

  saveEdit

}) => {

  return (

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
  )
}

export default EditModal