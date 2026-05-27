import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {

  const params = useParams()

  return (

    <div>

      {/* Page Heading */}
      <div className='mb-4'>

        <h1 className='fw-bold'>
          Profile Page
        </h1>

        <p className='text-muted'>
          Welcome to {params.user}'s profile
        </p>

      </div>

      {/* Profile Card */}
      <div className='card shadow-sm border-0 p-4'>

        <div className='d-flex align-items-center gap-4'>

          {/* Profile Image */}
        <img
  src="https://res.cloudinary.com/ddlox6t74/image/upload/v1778104197/students/gjuvwvs8q0eix8enesks.jpg"
  alt="profile"
  className='rounded-circle'
  style={{
    width: '120px',
    height: '120px',
    objectFit: 'cover'
  }}
/>

          {/* User Info */}
          <div>

            <h3 className='fw-bold mb-1'>
              {params.user}
            </h3>

            <p className='text-muted mb-2'>
              Full Stack Developer
            </p>

            <button className='btn btn-primary'>
              Edit Profile
            </button>

          </div>

        </div>

        <hr className='my-4' />

        {/* Details Section */}
        <div className='row g-4'>

          <div className='col-md-6'>
            <div className='bg-light p-3 rounded'>

              <h5>Email</h5>

              <p className='text-muted'>
                clement@example.com
              </p>

            </div>
          </div>

          <div className='col-md-6'>
            <div className='bg-light p-3 rounded'>

              <h5>Phone</h5>

              <p className='text-muted'>
                +234 800 000 0000
              </p>

            </div>
          </div>

          <div className='col-md-6'>
            <div className='bg-light p-3 rounded'>

              <h5>Location</h5>

              <p className='text-muted'>
                Lagos, Nigeria
              </p>

            </div>
          </div>

          <div className='col-md-6'>
            <div className='bg-light p-3 rounded'>

              <h5>Role</h5>

              <p className='text-muted'>
                Frontend Engineer
              </p>

            </div>
          </div>

        </div>

      </div>

    </div>
    
  )
}

export default UserProfile